module.exports = {
  'extends': 'airbnb-base',
  'env': {
    'browser': true,
    'node': true,
    'mocha': true
  },
  'globals': {
    'expect': true
  },
  'rules': {
    'comma-dangle': ['off'],
    'import/prefer-default-export': ['off'],
    'no-shadow': ['off']
  }
};