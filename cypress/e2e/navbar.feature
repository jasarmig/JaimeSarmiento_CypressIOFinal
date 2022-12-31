Feature: Navigation Bar

As a user
I wan to verify all navigation options are working properly

Background: User must be at the HomePage
    Given User visits the Homepage

@smoke @regression
Scenario: User can navigate to Cart
    When User clicks on cart navigation
    Then User is on the cart

@regression
Scenario: User can navigate to Home
    When User is at the cart
    And User clicks on home navigation
    Then User navigates to Homepage

@regression
Scenario: Validate Contact navigation item
    When User clicks on "Contact"
    Then "Contact" modal is displayed

@regression
Scenario: Validate About Us navigation item
    When User clicks on "About us"
    Then "About us" modal is displayed

@smoke @regression
Scenario: Validate Log In navigation item
    When User clicks on "Log in"
    Then "Log in" modal is displayed

@smoke @regression
Scenario: Validate Sign Up navigation item
    When User clicks on "Sign up"
    Then "Sign up" modal is displayed

@regression
Scenario: Navbar changes when user logs in
    When User logs in
    Then Navbar shows logout
    And Navbar shows user name