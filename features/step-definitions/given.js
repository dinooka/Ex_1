import { Given } from '@wdio/cucumber-framework';

Given("the user navigates to the home page", async() =>{         
        await browser.url("/");
        await browser.maximizeWindow();
});