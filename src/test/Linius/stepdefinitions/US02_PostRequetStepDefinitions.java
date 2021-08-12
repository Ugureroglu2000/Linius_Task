package stepdefinitions;
import static io.restassured.RestAssured.*;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import utilities.ConfigurationReader;

public class US02_PostRequetStepDefinitions {
    Response response;

    @Given("I get the request token")
    public void i_get_the_request_token() {
        Response response=given().when().get(ConfigurationReader.getProperty("getToken_endpoint"));
        response.prettyPrint();
        JsonPath json=response.jsonPath();
        String requestToken=json.getString("\"request_token\"");
        System.out.println(requestToken);

    }
    @When("I send a post request {string}")
    public void i_send_a_post_request(String endpoint) {
        response = given().when().
                header(post().contentType(), ConfigurationReader.getProperty("Content-Type")).
                body().
                post(ConfigurationReader.getProperty(endpoint));


    }

    @Then("validate the {string}")
    public void validate_the(String expectedContentType) {
    response.then().
            assertThat().contentType(ConfigurationReader.getProperty(expectedContentType));

    }
}