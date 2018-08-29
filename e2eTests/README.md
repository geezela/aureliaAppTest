#Test scenario
1. Open page: http://webplayground.io/simple-aurelia-app/
2. Write "365" in the field "amount" under "Currency I have" (Input on left side). Converter is set up from PLN to USD
3. Make sure that in the second field of "amount" (USD) the result is "100".
4. Open page again
5. Write "365" in the field "amount" under "Currency I have" (Input on left side). Converter is set up from PLN to USD
6. Click on the right arrow (now calculation is changed from USD to PLN)
7.  Make sure that in the second field of "amount" (PLN) the result is 1332,25 in the field.

# Setup

* Clone the repo
* Install dependencies `npm install`

to run test update webdriver manager: `webdriver-manager update`
to run test run first webdriver manager by command: `webdriver-manager start`
than run test using (using new console window): `npm start`