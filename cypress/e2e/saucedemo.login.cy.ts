import { LoginPage } from "../page/index";

const loginPage = new LoginPage();

describe("Verifying Login Process for SauceDemo", () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/");
    });

    it("Login should notify when a wrong username/password combination is used.", () => {
        loginPage.login("testUser", "testPass");

        // Assertion for error message
        loginPage.getErrorMsg().should(
            "include.text",
            "Username and password do not match any user in this service")
    });

    it("Login should work for existing user.", () => {
        loginPage.login("standard_user", "secret_sauce");

        // Assertion that verifies that products list is displayed
        cy.get(".title").should("have.text", "Products")
    });
});