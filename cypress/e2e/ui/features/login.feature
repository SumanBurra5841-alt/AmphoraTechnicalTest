Feature: Login Functionality

  Scenario: Verify successful login with valid credentials
    Given I navigate to the login page
    When I enter valid credentials
    And I click on the login button
    Then I should be logged in successfully

  Scenario: Verify error message on invalid login
    Given I navigate to the login page
    When I enter invalid credentials
    And I click on the login button
    Then I should see an error message
