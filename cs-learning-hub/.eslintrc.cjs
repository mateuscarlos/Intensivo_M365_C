module.exports = {
  root: true,
  env: {
    browser: true,
    es2023: true,
    node: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    project: ["./tsconfig.json"],
    sourceType: "module"
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "import"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/stylistic",
    "prettier"
  ],
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      typescript: {}
    }
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
        groups: [["builtin", "external"], "internal", ["parent", "sibling", "index"]],
        alphabetize: { order: "asc", caseInsensitive: true }
      }
    ]
  }
};
