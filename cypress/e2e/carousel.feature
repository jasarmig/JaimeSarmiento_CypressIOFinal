Feature: Homepage Carousel

    As a user
    I want to check that the carrousel controls work properly

    Background: User must be at the HomePage
        Given User visits the Homepage

    @regression
    Scenario: Validate number of indicators and number of elements are the same
        Then Number of indicators equals number of carousel items
    
    @regression
    Scenario: Validate indicator changes with next arrow click
        When User clicks on next arrow 
        Then Next indicator should be active

    @regression
    Scenario: Validate indicator changes to first position on next arrow click with last item visible
        When User can see last carousel item
        And User clicks on next arrow
        Then First indicator should be active