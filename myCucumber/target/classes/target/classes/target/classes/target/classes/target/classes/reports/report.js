$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("target/classes/target/classes/target/classes/features/search.feature");
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
  "duration": 14681006887,
  "status": "passed"
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
  "duration": 4424745077,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_search_button()"
});
formatter.result({
  "duration": 1548127891,
  "status": "passed"
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
  "duration": 3206485317,
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
  "duration": 13344163560,
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
  "duration": 1708693955,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_search_button()"
});
formatter.result({
  "duration": 648580824,
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
  "duration": 3650647863,
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
  "duration": 8141676447,
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
  "duration": 3016361851,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_search_button()"
});
formatter.result({
  "duration": 2647120392,
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
  "duration": 3730479089,
  "status": "passed"
});
});