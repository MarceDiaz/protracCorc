var myStepDefinitionsWrapper = function () {
    this.Given(/^I go to "https:\/\/corcoran\.com"$/, function (arg1, callback) {
        callback.pending();
    });
};
module.exports = myStepDefinitionsWrapper;