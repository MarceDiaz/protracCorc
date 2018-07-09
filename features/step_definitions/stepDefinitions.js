//features/step_definitions/my_step_definitions.js
//var Given = Cucumber.Given;
//var When = Cucumber.When;
//var Then = Cucumber.Then;
//var timeout= require('timeout.js');

var {defineSupportCode} = require('cucumber');
//module.exports = function() {
defineSupportCode(function({Given, When, Then}) {
   Given('I load the web {string}', function (site,callback) {
        browser.waitForAngularEnabled(false);
        browser.get(site); /*.then(function(){
        //var el=element(by.model('todoList.todoText')).then(function(el){
             console.log("My Given: "); 
             return callback;
           }); /**/

           browser.findElement(by.id('price-slider')).isDisplayed().then(function () {
            console.log(">> OK, continue....\n");
            browser.getTitle().then(function(webPageTitle){
              console.log("browser.getTitle(): '"+webPageTitle+"'");
                callback();  
            });   

            }, function () {
                console.log(">> Error, page not loaded yet!!!\n");
                callback();
               });
              
   });

   When('I check something {string}', function (string,callback) {
           console.log("String value:"+string);
           callback();
         });

   When('I click some button', function (callback) {
           console.log("When 2");
           callback();
         });

   Then('I should validate that condition', function (callback) {
           console.log("My Then....");
           callback();
         });
    Given("I go to {string}", function (site, callback) {
        browser.waitForAngularEnabled(true);
        browser.get(site);
        browser.findElement(by.model('todoList.todoText')).isDisplayed().then(function (el) {
            console.log(">> Page loaded ok, continue....\n");
            browser.getTitle().then(function(webPageTitle){
                console.log("browser.getTitle(): '"+webPageTitle+"'");
                callback();
            });

        }, function () {
            console.log(">> Error, page not loaded yet!!!\n");
            callback();
        });
        //callback();
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
    /*
  this.Given(/^I go to "([^"]*)"$/, function(site, callback) {
    browser.get(site)
     .then(callback);
*/
});