
const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");


import NavigationPage from '../../pages/NavigationPage'

const nav = new NavigationPage();

Given('I navigate to Jackets section', () => {
  
 cy.visit('/customer/account/login/');
  nav.navigateToJackets();
});

When('I sort by size {string}', (size) => {
  nav.filterBySize(size);
});

When('I select the first jacket and add it to the cart', () => {
  nav.addFirstItemToCart();
});

Then('I should see the item added in the cart', () => {
  nav.verifyItemInCart();
});

Then('I clear the cart', () => {
  nav.clearCart();
});
