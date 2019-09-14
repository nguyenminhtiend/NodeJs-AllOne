module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2018
  },
  plugins: [],
  extends: ['airbnb-base'],
  rules: {
    'comma-dangle': 0
  },
  env: {
    es6: true,
    node: true,
    mocha: true
  }
};
