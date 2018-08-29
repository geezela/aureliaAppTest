require("babel-register")({
  presets: [ 'es2015' ]
});

exports.config = {
  //framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['e2eTests/functionalityTests/convertingCurrency_test.js'],
  };
