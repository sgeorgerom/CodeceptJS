exports.config = {
  tests: './*_test.inject.po.js',
  timeout: 10000,
  output: './output',
  helpers: {
    FileSystem: {},
  },
  include: {
    I: '../../support/custom_steps.js',
    MyPage: '../../support/my_page.js',
    SecondPage: '../../support/second_page.js',
    CurrentPage: './po/custom_steps.js',
  },
  bootstrap: false,
  mocha: {},
  name: 'sandbox',
};
