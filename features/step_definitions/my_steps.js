var myStepDefinitionsWrapper = function () {
    this.Given(/^I go to "([^"]*)"$/, function (site, callback) {
        browser.waitForAngularEnabled(false);
        browser.get(site);
    });

    this.Given(/^I go to "https:\/\/angularjs\.org\/"$/, function (arg1, callback) {
        callback.pending();
    });
    this.When(/^I add "([^"]*)" in the task field$/, function (arg1, callback) {
        callback.pending();
    });
    this.When(/^I click the add button$/, function (callback) {
        callback.pending();
    });
    this.Then(/^I should see my new task in the list$/, function (callback) {
        callback.pending();
    });
};
module.exports = myStepDefinitionsWrapper;