import { Then } from "@wdio/cucumber-framework";
const chai = require('chai');
const assert = chai.assert; 

Then(/^the user verify the item is "(.*)" state$/, async (keyword) => {

    const button = $(".//span[@class='available-now']");
    await button.scrollIntoView();
    await button.waitForDisplayed(3000);
    const btnText = await button.getText();
    const newText = await btnText.replace(/^\s+|\s+$/gm, '');
    // console.log("btn text is ", btnText);
    // console.log("key text is ", keyword);
    //await browser.debug();
    assert.equal(newText,keyword,'search text is not available');


});
