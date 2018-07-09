"# protracCorc" 

cucumber-jvm
=====================

Test automated project for testing End to End of Corcoran
using Protractor - Cucumber on JavaScript 


Prerequisites
--------------
**Java 8:** http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html


Install components
------------------
**Checkout project from:**
https://github.com/MarceDiaz/protracCorc.git

**Download the driver of your preferred browser from:**
http://docs.seleniumhq.org/download/


## Running the stories

This will run the build and test website: https://corcoran.com

    In order to run Protractor, you will need to first start the Selenium Server. Protractor includes a webdriver-manager tool that starts up your server. In a separate terminal tab, run the webdriver-manager update command. This downloads the necessary selenium server and chromedriver components. Then run webdriver-manager start to start up the server.
    
    Then you can use protractor protractor.conf.js in the terminal to run the test 