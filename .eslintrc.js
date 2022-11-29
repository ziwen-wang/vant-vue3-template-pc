module.exports = {
  parser: "vue-eslint-parser",
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  },
  plugins: ["vue", "@typescript-eslint", "prettier"],
  rules: {
    indent: ["error", 2],
    // 关闭驼峰命名规则
    "vue/multi-word-component-names": 0
  }
};
