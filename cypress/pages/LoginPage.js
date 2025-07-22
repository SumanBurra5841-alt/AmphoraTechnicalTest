class LoginPage {
  visitLogin() {
    cy.visit('/customer/account/login/');
  }

  fillEmail(email) {
    cy.get('#email').type(email);
  }

  fillPassword(password) {
    cy.get('#pass').type(password);
  }

  clickLogin() {
    cy.get('#send2').click();
  }

  getWelcomeText() {
    return cy.get('.greet.welcome');
  }

  getErrorMessage() {
    return cy.get('.message-error > div');
  }
}

module.exports = new LoginPage();
