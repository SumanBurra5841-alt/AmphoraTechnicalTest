const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const loginPage = require("../../pages/LoginPage");

Given('I navigate to the login page', () => {
  loginPage.visitLogin();
});

When('I enter valid credentials', () => {
  loginPage.fillEmail('sumanburra99@gmail.com'); // Replace with valid credentials
  loginPage.fillPassword('Password123');
});

When('I enter invalid credentials', () => {
  loginPage.fillEmail('wronguser@example.com');
  loginPage.fillPassword('WrongPassword');
});

When('I click on the login button', () => {
  loginPage.clickLogin();
});

Then('I should be logged in successfully', () => {
  loginPage.getWelcomeText().should('contain', 'Welcome');
});

Then('I should see an error message', () => {
  loginPage.getErrorMessage().should('be.visible');
});

