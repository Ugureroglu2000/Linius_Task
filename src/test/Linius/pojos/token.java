package pojos;

import static io.restassured.RestAssured.*;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import utilities.ConfigurationReader;
import org.junit.Test;

public class token {
    @Test
    public void tokn(){
        Response response=given().when().get(ConfigurationReader.getProperty("getToken_endpoint"));
        response.prettyPrint();
        JsonPath json=response.jsonPath();
        String ruquestToken=json.getString("\"request_token\"");
        System.out.println(ruquestToken);



    }
}
