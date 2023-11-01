package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.safari.SafariDriver;

import java.util.concurrent.TimeUnit;

public class Search {

    private WebDriver driver;

    @Given("^I am on the next home page$")
    public void i_am_on_the_next_home_page() {
        WebDriverManager.safaridriver().setup();
        driver = new SafariDriver();
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        driver.manage().window().maximize();
        driver.get("https://www.next.co.uk/");
        driver.findElement(By.xpath("//button[@id='onetrust-accept-btn-handler']")).click();
    }

    @When("^I click on search button$")
    public void i_click_on_search_button()  {
        driver.findElement(By.xpath("//button[@data-testid='header-search-bar-button']")).click();
    }

    @When("^I enter \"([^\"]*)\" as a product type in the search box$")
    public void i_enter_as_a_product_type_in_the_search_box(String productType)  {
        driver.findElement(By.xpath("//input[@autocomplete='off']")).sendKeys(productType);

    }

    @Then("^I should be able to see \"([^\"]*)\" as result title$")
    public void i_should_be_able_to_see_as_result_title(String resultTitle) throws InterruptedException {
        String expectedVal = "\"" + resultTitle + "\"";
        Thread.sleep(2000);
        String actualVal = driver.findElement(By.xpath("//span[@data-testid='plp-product-title-text']")).getText();
        Assert.assertEquals(expectedVal, actualVal);
        driver.close();

    }
}