import { retrieveSourceMap } from "source-map-support";


class CurrencyConverterPage {

    /**
     * define elements
     */

    get amountFromField() {
        return element(by.id("amountFrom"));
    }

    get amountToField() {
        return element(by.id("amountTo"));
    }

    get pageHeader() {
        return element(by.css(".page-header"));
    }

    get fromCurrencyImg() {
        return element(by.css("[au-target-id='15'] [au-target-id='6']"));
    }

    get toCurrencyImg() {
        return element(by.css("[au-target-id='18'] [au-target-id='6']"));
    }

    get arrowRight() {
        return element(by.css(".glyphicon-triangle-right"));
    }
    /**
     * define or overwrite page methods
     */

    setFromCurrencyValue(amount) {
        this.amountFromField.sendKeys(amount);
    }

    switchCurrency() {
        this.arrowRight.click();
    }
}

export default new CurrencyConverterPage();
