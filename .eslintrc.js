module.exports = {
  env: {
    browser: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "react-app",
    "prettier",
    "prettier/react",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["prettier", "react", "@typescript-eslint"],
  rules: {
    "no-shadow": [
      "warn",
      { builtinGlobals: false, hoist: "functions", allow: [] },
    ],
    "react/jsx-props-no-spreading": "off",
    camelcase: "off",
    "@typescript-eslint/camelcase": "off",
    "react/prop-types": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "no-console": "warn",
    "react/jsx-filename-extension": [
      "error",
      { extensions: [".jsx", ".tsx", ".ts", ".js"] },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
        js: "never",
        jsx: "never",
      },
    ],
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: "webpack.config.js",
      },
    },
  },
};
