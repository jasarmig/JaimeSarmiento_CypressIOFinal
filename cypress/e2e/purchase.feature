Feature: Purchase Flow

As a user
I want to be able to purchase one or more products

Background: User must be at the HomePage
    Given User visits the Homepage

@regression
Scenario: User selects a product category
    When User clicks on a category
    Then Amount of elements decreases

@regression
Scenario: User adds item to the cart
    When User clicks on a product
    And User is redirected to product page
    And User clicks add to cart button
    Then A product is added to the Cart

@regression
Scenario: User deletes item from the cart
    When User has one product in the Cart
    And User clicks on the item's delete link
    Then The cart should be empty

@regression
Scenario: User buys one product
    When User has one product in the Cart
    And User clicks on Place Order button
    And User completes purchase
    Then Receives a purchase confirmation
