module.exports = {
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'es6': true
  },
'extends': [
    'standard',
    'plugin:react/recommended'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'react/display-name': 'off',
    'react/prop-types': 'off'
  },
  'globals': {
  '__DEV__': 'readonly',
  'describe': 'readonly',
  'jest': 'readonly',
  'beforeEach': 'readonly',
  'it': 'readonly',
  'expect': 'readonly'
  }
}
