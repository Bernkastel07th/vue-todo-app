module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": proccess.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": proccess.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": [
      "error",
      {
        tabWidth: 2,
        singleQuote: false,
        semi: true,
      },
    ],
  },
};
