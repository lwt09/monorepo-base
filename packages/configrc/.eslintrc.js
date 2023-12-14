module.exports = {
  // 需要 next 时候开启这配置
  extends: ['airbnb', 'prettier', 'next'],
  plugins: ['prettier'],

  // 不需要 next 时候正常配置
  // extends: ['airbnb', 'prettier'],
  // plugins: ['prettier'],

  env: {
    browser: true,
    node: true,
  },
  rules: {
    'no-continue': 'off',
    'no-console': 'off',
    'no-restricted-exports': 'off',
    'no-restricted-syntax': 'off',
    'class-methods-use-this': 'off',
    'no-await-in-loop': 'off',
    'no-param-reassign': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'react/prop-types': 'warn',
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'no-unused-vars': 'warn',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/heading-has-content': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'react/no-unstable-nested-components': 'off',
    'no-empty': 'warn',
    'no-html-link-for-pages': 'off',
  },
};
