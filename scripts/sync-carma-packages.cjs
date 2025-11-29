#!/usr/bin/env node

/**
 * Syncs dependencies from carma monorepo's package.json to this project's package.json
 * Respects rules defined in package-sync-rules.json
 */

const fs = require("fs");
const path = require("path");

const CARMA_PACKAGE = path.join(__dirname, "../_carma_monorepo/package.json");
const LOCAL_PACKAGE = path.join(__dirname, "../package.json");
const RULES_FILE = path.join(__dirname, "package-sync-rules.json");

// Read files
const carmaPackage = JSON.parse(fs.readFileSync(CARMA_PACKAGE, "utf8"));
const localPackage = JSON.parse(fs.readFileSync(LOCAL_PACKAGE, "utf8"));
const rules = JSON.parse(fs.readFileSync(RULES_FILE, "utf8"));

const skipDeps = new Set(rules.skip.dependencies || []);
const skipDevDeps = new Set(rules.skip.devDependencies || []);
const additionalDeps = rules.additional.dependencies || {};
const additionalDevDeps = rules.additional.devDependencies || {};

// Track changes for reporting
const changes = {
  added: [],
  updated: [],
  skipped: [],
};

/**
 * Sync dependencies from source to target, respecting skip list
 */
function syncDependencies(source, target, skipSet, additional, type) {
  // Start with existing target deps to preserve local-only packages
  const result = { ...target };

  // Add/update from source (monorepo)
  for (const [pkg, version] of Object.entries(source)) {
    if (skipSet.has(pkg)) {
      changes.skipped.push(`${type}: ${pkg} (in skip list)`);
      continue;
    }

    if (!target[pkg]) {
      changes.added.push(`${type}: ${pkg}@${version}`);
    } else if (target[pkg] !== version) {
      changes.updated.push(`${type}: ${pkg} ${target[pkg]} -> ${version}`);
    }
    result[pkg] = version;
  }

  // Add additional deps (overrides or extras not in monorepo)
  for (const [pkg, version] of Object.entries(additional)) {
    if (!result[pkg] || result[pkg] !== version) {
      changes.added.push(`${type}: ${pkg}@${version} (additional)`);
    }
    result[pkg] = version;
  }

  return result;
}

// Sync dependencies
localPackage.dependencies = syncDependencies(
  carmaPackage.dependencies || {},
  localPackage.dependencies || {},
  skipDeps,
  additionalDeps,
  "dependencies"
);

// Sync devDependencies
localPackage.devDependencies = syncDependencies(
  carmaPackage.devDependencies || {},
  localPackage.devDependencies || {},
  skipDevDeps,
  additionalDevDeps,
  "devDependencies"
);

// Write back
fs.writeFileSync(LOCAL_PACKAGE, JSON.stringify(localPackage, null, 2) + "\n");

// Report
console.log("=== Package Sync Complete ===\n");

if (changes.added.length > 0) {
  console.log("Added:");
  changes.added.forEach((c) => console.log(`  + ${c}`));
  console.log();
}

if (changes.updated.length > 0) {
  console.log("Updated:");
  changes.updated.forEach((c) => console.log(`  ~ ${c}`));
  console.log();
}

if (changes.skipped.length > 0) {
  console.log("Skipped:");
  changes.skipped.forEach((c) => console.log(`  - ${c}`));
  console.log();
}

const totalChanges = changes.added.length + changes.updated.length;
if (totalChanges === 0) {
  console.log("No changes needed - packages already in sync.");
} else {
  console.log(`\n${totalChanges} package(s) changed. Run 'npm install' to apply.`);
}
