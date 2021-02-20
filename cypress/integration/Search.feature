Feature: Search

   Background:
    Given I visit the homepage

   Scenario: Search with correct capitalization
     When I enter a capitalized search term
     Then I should see the correct result

   Scenario: Search with all lowercase characters
     When I enter an all lowercase search term
     Then I should see the correct result

   Scenario: Search with all uppercase characters
     When I enter an all uppercase search term
     Then I should see the correct result
