# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)
- 1

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
- A unit test would not be used, due to the complexity of the "message" feature. Unit testing is ideal for individual components of an application, which "message" is not included.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters
- Yes. A maximum message length of 80 characters can be easily unit tested, since it can be considered as a single component.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?
- The browser UI would not be ran with.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?
- By using the settings icon image with `await page.click('header > img')`.
