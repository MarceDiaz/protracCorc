var myStepDefinitionsWrapper = function () {
    Given("I go to {string}", function (site, callback) {
        browser.waitForAngularEnabled(true);
        browser.get(site);
        callback();
    });
    When("I add {string} in the task field", function (arg1, callback) {
        callback();
    });
    When("I click the add button", function (callback) {
        callback();
    });
    Then("I should see my new task in the list", function (callback) {
        callback();
    });
    /*this.Given(/^I go to "https:\/\/angularjs\.org\/"$/, function (site, callback) {

        //callback.pending();
    });
    When(/^I add "([^"]*)" in the task field$/, function (arg1, callback) {
        callback();
    });
    When(/^I click the add button$/, function (callback) {
        callback();
    });
    Then(/^I should see my new task in the list$/, function (callback) {
        callback();
    });*/
};
module.exports = myStepDefinitionsWrapper;