$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US02_PostRequest.feature");
formatter.feature({
  "name": "Post Requests",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US02"
    }
  ]
});
formatter.scenario({
  "name": "TC-01 post the rating",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US02"
    }
  ]
});
formatter.step({
  "name": "I get the request token",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US02_PostRequetStepDefinitions.i_get_the_request_token()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send a post request \"postRatingTvepisode_endpoint\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.US02_PostRequetStepDefinitions.i_send_a_post_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Http status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US01_GetRequestStepDefinition.http_status_code_should_be(java.lang.Integer)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat stepdefinitions.US01_GetRequestStepDefinition.http_status_code_should_be(US01_GetRequestStepDefinition.java:20)\r\n\tat ✽.Http status code should be 200(file:///C:/Users/fth/IdeaProjects/Linius1Cucumber/src/test/resources/features/US02_PostRequest.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "validate the \"content-Type\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US02_PostRequetStepDefinitions.validate_the(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
});