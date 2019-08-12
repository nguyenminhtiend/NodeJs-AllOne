module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 10
  },
  plugins: [],
  extends: ['airbnb-base'],
  rules: {
    'comma-dangle': 0,
    'no-console': 0,
    'func-names': 0,
    'no-underscore-dangle': 0
  },
  env: {
    es6: true,
    node: true,
    mocha: true
  }
};
