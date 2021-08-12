@US03
Feature: Delete Requests

  Scenario: TC-01 delete the rating
    When I send a delete request "deleteRating_endpoint"
    Then Verify the status message is "The item/record was deleted successfully."
    Then Verify the status code