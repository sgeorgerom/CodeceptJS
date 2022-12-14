exports.config = {
  tests: './*_test.logs.js',
  timeout: 10000,
  output: './output',
  helpers: {
    CustomHelper: {
      require: './customHelper.js',
    },
  },
  include: {
    LogsPage: './pages/logs_page.js',
  },
  bootstrap: false,
  mocha: {},
  name: 'sandbox',
};
