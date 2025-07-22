class NavigationPage {
  navigateToJackets() {
    cy.get('#ui-id-5').trigger('mouseover');
    cy.get('#ui-id-17').trigger('mouseover');
    cy.get('#ui-id-19').click();
  }

  filterBySize(size) {
    cy.get('div.swatch-option[option-label="L"]').click();
    cy.get('div.swatch-option[option-label="L"]').should('have.class', 'selected');

    // cy.get('div.filter-options').contains('Size').click();
    // cy.get('div.swatch-option[option-label="L"]').click();
  }

  addFirstItemToCart() {
    cy.get('.product-item').first().within(() => {
      cy.get('a.product-item-link').click();
    });
    cy.get('div.swatch-option').first().click(); // select size
    // cy.get('div.swatch-option.color').first().click(); // select color
    cy.get('#option-label-size-143-item-169').click();
    cy.get('#option-label-color-93-item-50').click();
    cy.get('#product-addtocart-button').click();
  }

  verifyItemInCart() {
    cy.get('.message-success').should('contain', 'You added');
  }

  clearCart() {
    cy.get('.action.showcart').click();
    cy.get('.viewcart').click();
    cy.get('.action-delete').first().click();
    // cy.get('.action-primary.action-accept').click();
    cy.get('.cart-empty > :nth-child(1)').should('be.visible');
  }
}

export default NavigationPage;
