package stepdefinitions;
import static io.restassured.RestAssured.*;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.checkerframework.checker.units.qual.C;
import org.testng.asserts.SoftAssert;
import utilities.ConfigurationReader;

import java.util.HashMap;
import java.util.Map;

public class US02_PostRequetStepDefinitions {
    Map<String, Object> expected = new HashMap<>();
    Response response;
    String requestToken;
    RequestSpecification spec;//I d like to show you ,but I need more time..

    @Given("I get the request token")
    public void i_get_the_request_token() {
        Response response = given().when().get(ConfigurationReader.getProperty("getToken_endpoint"));
        response.prettyPrint();
        JsonPath json = response.jsonPath();
        String requestToken = json.getString("\"request_token\"");
        System.out.println(requestToken);

    }

    @When("I send a post request {string}")
    public void i_send_a_post_request(String endpoint) {
//        spec=new new RequestSpecBuilder().
//            setBaseUri(ConfigurationReader.getProperty("baseurl")).
//            build();
//        spec.pathParams("first",1339,"second","rating");


        expected.put("value", 7);


        response = given().contentType(ConfigurationReader.getProperty("Content-Type")).
                body(expected).when().
                post(ConfigurationReader.getProperty(endpoint));
        response.prettyPrint();


    }

    @Then("Success message is true")
    public void success_message_is_true() {
        JsonPath json = response.jsonPath();
        SoftAssert softAssert = new SoftAssert();
        softAssert.assertEquals(json.getString("status_message"),"The item/record was updated successfully.");
        softAssert.assertAll();
    }
}