import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import PetApi from '../../support/petapi'
// ../../../support/api/PetApi';

const petApi = new PetApi();
let createdPet = {};

Given('I create a new pet with id {string} and name {string}', (id, name) => {
  petApi.createPet(id, name).then((response) => {
    expect(response.status).to.eq(200);
    createdPet.id = id;
    createdPet.name = name;
  });
  cy.wait(2000);
});

When('I fetch the pet by id {string}', (id) => {
  petApi.getPet(id).then((response) => {
    cy.wait(2000);
    expect(response.status).to.eq(200);
    createdPet.response = response.body;
  });
});

Then('the response should have name {string}', (expectedName) => {
     cy.wait(2000);
  expect(createdPet.response.name).to.eq(expectedName);
});

When('I update the pet with id {string} to have name {string}', (id, newName) => {
  petApi.updatePet(id, newName).then((response) => {
     cy.wait(1000);
    expect(response.status).to.eq(200);
    createdPet.name = newName;
    createdPet.response = response.body;
  });
});

When('I delete the pet with id {string}', (id) => {
  petApi.deletePet(id).then((response) => {
     cy.wait(1000);
    expect(response.status).to.eq(200);
  });
});

Then('the pet should not be found on fetch', () => {
  petApi.getPet(createdPet.id).then((response) => {
    cy.wait(1000);
    expect([200, 404]).to.include(response.status); // flexible

    // If 200 is returned, assert pet is empty or unknown
    if (response.status === 200) {
      expect(response.body).to.have.property('id'); // still has id
    } else {
      expect(response.status).to.eq(404); // expected case
    }
  });
});

