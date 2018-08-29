import CurrencyConverterPage from "../pageObjects/CurrencyConverter";

const until = protractor.ExpectedConditions;
const amount = '365';

browser.waitForAngularEnabled(false);
const url = 'http://webplayground.io/simple-aurelia-app/';

describe('Convert PLN to USD, and USD to PLN', function () {

  beforeEach(function () {
    browser.get(url);
    browser.wait(until.presenceOf(CurrencyConverterPage.pageHeader), 5000, 'Page header taking too long to appear in the DOM');
  });

  it('should convert PLN to USD', function () {
    CurrencyConverterPage.setFromCurrencyValue(amount);
    
    expect(CurrencyConverterPage.amountToField.getAttribute('value')).toEqual('100');
    expect(CurrencyConverterPage.fromCurrencyImg.getAttribute('alt')).toEqual('PLN');
    expect(CurrencyConverterPage.toCurrencyImg.getAttribute('alt')).toEqual('USD');

  });

  it('should convert USD to PLN', function() {
    CurrencyConverterPage.setFromCurrencyValue(amount);
    CurrencyConverterPage.switchCurrency();

    expect(CurrencyConverterPage.amountToField.getAttribute('value')).toEqual('1332.25');
    expect(CurrencyConverterPage.fromCurrencyImg.getAttribute('alt')).toEqual('USD');
    expect(CurrencyConverterPage.toCurrencyImg.getAttribute('alt')).toEqual('PLN');

  });

});
