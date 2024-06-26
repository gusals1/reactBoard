module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
  overrides: [],
  parserOptions: {
    project: "**/tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-misused-promises": "off", // HOF를 배우고 나서 wrapAsync 함수로 해결 가능(그 전까지는 off 할 것)
    "@typescript-eslint/strict-boolean-expressions": "off",
    "react/display-name": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/promise-function-async": "off",
  },
};
