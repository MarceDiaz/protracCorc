//features/step_definitions/my_step_definitions.js
//var Given = Cucumber.Given;
//var When = Cucumber.When;
//var Then = Cucumber.Then;
//var timeout= require('timeout.js');

var {defineSupportCode} = require('cucumber');
//module.exports = function() {
defineSupportCode(function({Given, When, Then}) {
/*
  this.Given(/^I go to "([^"]*)"$/, function(site, callback) {
    browser.get(site)
     .then(callback);
*/

   
   Given('I go to {string}', function (site,callback) {
        browser.waitForAngularEnabled(false);
        browser.get(site); /*.then(function(){
        //var el=element(by.model('todoList.todoText')).then(function(el){
             console.log("My Given: "); 
             return callback;
           }); /**/

           browser.findElement(by.id('price-slider')).isDisplayed().then(function () {
            console.log(">> OK, continue....\n");
            browser.getTitle().then(function(webpagetitle){
              console.log("browser.getTitle(): '"+webpagetitle+"'"); 
                callback();  
            });   

            }, function () {
                console.log(">> Error, page not loaded yet!!!\n");
                callback();
               });
              
         });

   When('I add {string} in the task field', function (string,callback) {
           console.log("String value:"+string);
           callback();
         });

   When('I click the add button', function (callback) {
           console.log("When 2");
           callback();
         });

   Then('I should see my new task in the list', function (callback) {
           console.log("My Then....");
           callback();
         });
  });