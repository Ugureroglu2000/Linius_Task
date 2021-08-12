package stepdefinitions;

import com.google.gson.Gson;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.response.Response;
import static io.restassured.RestAssured.*;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.checkerframework.checker.units.qual.C;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;
import utilities.ConfigurationReader;

import java.util.HashMap;
import java.util.Map;

public class US03_DeletRequestStepDefinitions {
    Response response;
    Gson gson=new Gson();
    Map<String, Object> expected = new HashMap<>();

    @When("I send a delete request {string}")
    public void i_send_a_delete_request(String endpoint) {
        response=given().contentType(ConfigurationReader.getProperty("Content-Type")).
                when().delete(ConfigurationReader.getProperty(endpoint));
        response.prettyPrint();
    }

    @Then("Verify the status message is {string}")
    public void verify_the_status_message_is(String statusMessage) {

        expected.put("status_code", 13);
        expected.put("success", true);
        expected.put("status_message", "The item/record was deleted successfully.");

        Assert.assertEquals(response.asString().contains(statusMessage),
                expected.get("status_message").equals("The item/record was deleted successfully."));

        Assert.assertEquals(response.asString().contains("true"),
                expected.get("success").equals(true));

        Assert.assertEquals(response.asString().contains("13"),
                expected.get("status_code").equals(13));

    }
    @Then("Verify the status code")
    public void verify_the_status_code() {
        response.then().assertThat().statusCode(200);
    }
}