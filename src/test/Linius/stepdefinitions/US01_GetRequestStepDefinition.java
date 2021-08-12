package stepdefinitions;
import static io.restassured.RestAssured.*;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.response.Response;
import utilities.ConfigurationReader;

public class US01_GetRequestStepDefinition {
    Response response;
    @Given("I send a get request {string}")
    public void i_send_a_get_request(String endpoint) {
        response = given().when().get(ConfigurationReader.getProperty(endpoint));
        response.prettyPrint();

    }
    @Then("Http status code should be {int}")
    public void http_status_code_should_be(Integer Statuscode) {
    response.then().
            assertThat().
            statusCode(Statuscode);
}
}