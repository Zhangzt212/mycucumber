Feature: Search behaviour

  Background:
    Given I am on the next home page

  Scenario: Validate search behaviour by product type as Jeans

    When I enter "Jeans" as a product type in the search box
    And I click on search button
    Then I should be able to see "Jeans" as result title

  Scenario: Validate search behaviour by Bag as product type

    When I enter "Bag" as a product type in the search box
    And I click on search button
    Then I should be able to see "Bag" as result title

  Scenario: Validate search behaviour by Shoes as product type

    When I enter "Shoe" as a product type in the search box
    And I click on search button
    Then I should be able to see "Shoe" as result title