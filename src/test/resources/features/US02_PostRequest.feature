@US02
  Feature: Post Requests
    Scenario: TC-01 post the rating
      Given I get the request token
      When I send a post request "postRating_endpoint"
      Then Http status code should be 200
      Then validate the "content-Type"