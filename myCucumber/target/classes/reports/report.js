$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("target/classes/target/classes/target/classes/target/classes/target/classes/target/classes/target/classes/features/search.feature");
formatter.feature({
  "line": 1,
  "name": "Search behaviour",
  "description": "",
  "id": "search-behaviour",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the next home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Search.i_am_on_the_next_home_page()"
});
formatter.result({
  "duration": 3556635173,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:577)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:246)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:168)\n\tat org.openqa.selenium.safari.SafariDriver.\u003cinit\u003e(SafariDriver.java:87)\n\tat org.openqa.selenium.safari.SafariDriver.\u003cinit\u003e(SafariDriver.java:69)\n\tat org.openqa.selenium.safari.SafariDriver.\u003cinit\u003e(SafariDriver.java:47)\n\tat steps.Search.i_am_on_the_next_home_page(Search.java:21)\n\tat ✽.Given I am on the next home page(target/classes/target/classes/target/classes/target/classes/target/classes/target/classes/target/classes/features/search.feature:4)\nCaused by: org.openqa.selenium.WebDriverException: Driver server process died prematurely.\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027zztdeMacBook.local\u0027, ip: \u0027fe80:0:0:0:816:c5c8:e014:4b11%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002713.5.2\u0027, java.version: \u00271.8.0_372\u0027\nDriver info: driver.version: SafariDriver\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:223)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:95)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:246)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:168)\n\tat org.openqa.selenium.safari.SafariDriver.\u003cinit\u003e(SafariDriver.java:87)\n\tat org.openqa.selenium.safari.SafariDriver.\u003cinit\u003e(SafariDriver.java:69)\n\tat org.openqa.selenium.safari.SafariDriver.\u003cinit\u003e(SafariDriver.java:47)\n\tat steps.Search.i_am_on_the_next_home_page(Search.java:21)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:232)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:55)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 6,
  "name": "Validate search behaviour by product type as Jeans",
  "description": "",
  "id": "search-behaviour;validate-search-behaviour-by-product-type-as-jeans",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I enter \"Jeans\" as a product type in the search box",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should be able to see \"Jeans\" as result title",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Jeans",
      "offset": 9
    }
  ],
  "location": "Search.i_enter_as_a_product_type_in_the_search_box(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Search.i_click_on_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeans",
      "offset": 25
    }
  ],
  "location": "Search.i_should_be_able_to_see_as_result_title(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the next home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Search.i_am_on_the_next_home_page()"
});
formatter.result({
  "duration": 32421786485,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Validate search behaviour by Bag as product type",
  "description": "",
  "id": "search-behaviour;validate-search-behaviour-by-bag-as-product-type",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I enter \"Bag\" as a product type in the search box",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should be able to see \"Bag\" as result title",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Bag",
      "offset": 9
    }
  ],
  "location": "Search.i_enter_as_a_product_type_in_the_search_box(String)"
});
formatter.result({
  "duration": 1418634125,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_search_button()"
});
formatter.result({
  "duration": 1672942565,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bag",
      "offset": 25
    }
  ],
  "location": "Search.i_should_be_able_to_see_as_result_title(String)"
});
formatter.result({
  "duration": 4002680010,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the next home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Search.i_am_on_the_next_home_page()"
});
formatter.result({
  "duration": 13647630536,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Validate search behaviour by Shoes as product type",
  "description": "",
  "id": "search-behaviour;validate-search-behaviour-by-shoes-as-product-type",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I enter \"Shoe\" as a product type in the search box",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should be able to see \"Shoe\" as result title",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Shoe",
      "offset": 9
    }
  ],
  "location": "Search.i_enter_as_a_product_type_in_the_search_box(String)"
});
formatter.result({
  "duration": 1996898684,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_search_button()"
});
formatter.result({
  "duration": 10416690884,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shoe",
      "offset": 25
    }
  ],
  "location": "Search.i_should_be_able_to_see_as_result_title(String)"
});
formatter.result({
  "duration": 3177769889,
  "status": "passed"
});
});