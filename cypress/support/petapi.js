class PetApi {
  baseUrl = 'https://petstore.swagger.io/v2';

createPet(id, name) {
  const payload = {
    id: Number(id),
    category: {
      id: 0,
      name: "dogs"
    },
    name: name,
    photoUrls: ["string"],
    tags: [
      {
        id: 0,
        name: "tag1"
      }
    ],
    status: "available"
  };

  return cy.request({
    method: 'POST',
    url: `${this.baseUrl}/pet`,
    body: payload,
    headers: { 'Content-Type': 'application/json' }
  });
}


  getPet(id) {
    return cy.request({
      method: 'GET',
      url: `${this.baseUrl}/pet/${id}`,
      failOnStatusCode: false
    });
  }

  updatePet(id, newName) {
    const payload = {
      id: Number(id),
      name: newName,
      status: 'available'
    };

    return cy.request({
      method: 'PUT',
      url: `${this.baseUrl}/pet`,
      body: payload,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  deletePet(id) {
    return cy.request({
      method: 'DELETE',
      url: `${this.baseUrl}/pet/${id}`,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export default PetApi;
