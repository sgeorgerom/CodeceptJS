exports.config = {
  tests: './fs_test.po.js',
  timeout: 10000,
  output: './output/pageobject',
  helpers: {
    FileSystem: {},
  },
  include: {
    I: './pages/custom_steps.js',
    MyPage: './pages/my_page.js',
  },
  bootstrap: false,
  mocha: {},
  plugins: {
    allure: {
      enabled: true,
    },
  },
  name: 'sandbox',
};
