// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

const tseslint = require("typescript-eslint");
const a11y = require("eslint-plugin-jsx-a11y");
const importPlugin = require("eslint-plugin-import");
const reactRefresh = require("eslint-plugin-react-refresh");
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const globals = require("globals");

delete globals.browser["AudioWorkletGlobalScope "]; // some weird bug

const baseConfig = {
  name: "Base Config",
  files: ["**/*.ts", "**/*.tsx"],
  plugins: {
    import: importPlugin,
    "jsx-a11y": a11y,
    react,
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
    "@typescript-eslint": tseslint.plugin,
  },
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      ecmaVersion: 2022,
      EXPERIMENTAL_useProjectService: true,
      //project: "tsconfig.app.json",
      ecmaFeatures: {
        jsx: true,
        modules: true,
      },
      sourceType: "module",
    },
    globals: {
      __dirname: "readonly",
      ...globals.browser,
    },
  },
  rules: {
    ...tseslint.configs.strictTypeChecked.rules,
    ...a11y.configs.recommended.rules,
    ...importPlugin.configs.recommended.rules,
    ...react.configs.recommended.rules,
    ...reactHooks.configs.recommended.rules,
    "react-refresh/only-export-components": ["warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "jsx-a11y/anchor-is-valid": "off", // TODO discuss accesibility issue or convert links to buttons
    "jsx-a11y/alt-text": "warn",
    "jsx-a11y/aria-role": "warn",
    "jsx-a11y/click-events-have-key-events": "off", // TODO
    "jsx-a11y/interactive-supports-focus": "warn",
    "jsx-a11y/label-has-associated-control": "warn",
    "jsx-a11y/no-autofocus": "warn",
    "jsx-a11y/no-noninteractive-element-interactions": "warn",
    "jsx-a11y/no-static-element-interactions": "off", // TODO
    "react/jsx-no-target-blank": "warn",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/no-unescaped-entities": "off", // TODO discuss template format
    "react/no-unknown-property": "warn",
    "react/prop-types": "warn",
    "react/react-in-jsx-scope": "off", // not needed with jsx since react 17
  },
  settings: {
    "import/parsers": {
      espree: [".js", ".cjs", ".mjs", ".jsx"],
      "@typescript-eslint/parser": [".ts", ".mts", ".mtx"],
    },
    "import/resolver": {
      ...importPlugin.configs.typescript.settings["import/resolver"],
    },
    react: {
      version: "detect",
    },
  },
};

// TODO add storybook plugin when it support flat configs https://github.com/storybookjs/eslint-plugin-storybook/issues/135

// order here specific to least specific
module.exports = [
  baseConfig,
  {
    ignores: [
      "dist",
      ".storybook",
      "storybook-static",
      "vite.config.ts",
      "src/vite-env.d.ts",
      "**/*.stories.tsx",
    ],
  },
];
