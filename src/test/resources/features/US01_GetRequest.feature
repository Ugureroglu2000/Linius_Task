@US01
Feature: Get Requests

  Scenario:TC-01 GetLatest request
    Given I send a get request "getLatest_endpoint"
    Then Http status code should be 200

  Scenario:TC-02 GetNowPlaying request
    Given I send a get request "getNowPlaying_endpoint"
    Then Http status code should be 200


    Scenario:TC-03 GetPopular request
      Given I send a get request "getPopular_endpoint"
      Then Http status code should be 200