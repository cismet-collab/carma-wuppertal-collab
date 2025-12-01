#!/usr/bin/env node

/**
 * Syncs path aliases from carma monorepo's tsconfig.base.json to this project's tsconfig.base.json
 * Prepends "_carma_monorepo/" to all path values
 */

const fs = require("fs");
const path = require("path");

const CARMA_TSCONFIG = path.join(__dirname, "../_carma_monorepo/tsconfig.base.json");
const LOCAL_TSCONFIG = path.join(__dirname, "../tsconfig.base.json");

// Strip comments from JSON (tsconfig allows // and /* */ comments)
// Be careful not to strip // inside strings (like file paths)
function stripJsonComments(str) {
  let result = "";
  let inString = false;
  let i = 0;

  while (i < str.length) {
    // Handle string boundaries
    if (str[i] === '"' && (i === 0 || str[i - 1] !== "\\")) {
      inString = !inString;
      result += str[i];
      i++;
    }
    // Handle // comments (only outside strings)
    else if (!inString && str[i] === "/" && str[i + 1] === "/") {
      // Skip until end of line
      while (i < str.length && str[i] !== "\n") {
        i++;
      }
    }
    // Handle /* */ comments (only outside strings)
    else if (!inString && str[i] === "/" && str[i + 1] === "*") {
      i += 2;
      while (i < str.length && !(str[i] === "*" && str[i + 1] === "/")) {
        i++;
      }
      i += 2; // Skip closing */
    }
    // Regular character
    else {
      result += str[i];
      i++;
    }
  }

  return result;
}

// Read carma's tsconfig.base.json
const carmaConfigRaw = fs.readFileSync(CARMA_TSCONFIG, "utf8");
const carmaConfig = JSON.parse(stripJsonComments(carmaConfigRaw));
const carmaPaths = carmaConfig.compilerOptions.paths;

// Read local tsconfig.base.json
const localConfig = JSON.parse(fs.readFileSync(LOCAL_TSCONFIG, "utf8"));

// Transform carma paths by prepending "_carma_monorepo/"
const transformedPaths = {};
for (const [alias, paths] of Object.entries(carmaPaths)) {
  // Skip @carma-collab paths - those point back to this repo
  if (alias.startsWith("@carma-collab/")) {
    continue;
  }
  transformedPaths[alias] = paths.map((p) => `_carma_monorepo/${p}`);
}

// Update local config with transformed paths
localConfig.compilerOptions.paths = transformedPaths;

// Write back
fs.writeFileSync(LOCAL_TSCONFIG, JSON.stringify(localConfig, null, 2) + "\n");

console.log("Synced paths from carma monorepo:");
console.log(Object.keys(transformedPaths).join("\n"));
