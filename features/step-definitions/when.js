import { When } from '@wdio/cucumber-framework';

const searchBar =  $(".//input[@name='search_query']");
const submitButton =  $(".//button[@name='submit_search']");

When(/^the user enters "(.*)" in the search bar$/, async (keyword) => {

    await searchBar.waitForDisplayed(3000);
    await searchBar.click();
    await searchBar.setValue(keyword);
    await submitButton.waitForDisplayed(2000);
    await submitButton.click();
    //await browser.debug();

});

