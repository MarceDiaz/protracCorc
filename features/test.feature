@Regression
#features/test.feature
Feature: Running Cucumber with Protractor
    As a user of Protractor
    I should be able to use Cucumber
    In order to run my E2E tests

    Scenario: Protractor and Cucumber Test
        Given I load the web "https://corcoran.com"
        When I check something "Be Awesome"
        And I click some button
        Then I should validate that condition