Feature: Pet API CRUD

  Scenario: Create, fetch, update, and delete a pet
    Given I create a new pet with id "10001" and name "Doggo"
    When I fetch the pet by id "10001"
    Then the response should have name "Doggo"
    When I update the pet with id "10001" to have name "DoggoUpdated"
    Then the response should have name "DoggoUpdated"
    When I delete the pet with id "10001"
    Then the pet should not be found on fetch
