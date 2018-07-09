@Regression
#features/test.feature
Feature: Running Cucumber with Protractor
    As a user of Protractor
    I should be able to use Cucumber
    In order to run my E2E tests

    Scenario: Protractor and Cucumber Test
        Given I load the web "https://corcoran.com"
        When I add "Be Awesome" in the task field
        And I click the add button
        Then I should see my new task in the list