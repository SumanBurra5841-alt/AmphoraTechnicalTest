Feature: Product Navigation

  Scenario: Navigate and add a jacket to cart
    Given I navigate to Jackets section
    When I sort by size "L"
    And I select the first jacket and add it to the cart
    Then I should see the item added in the cart
    And I clear the cart
