import {LoginPage, InventoryPage, ShoppingCartPage} from "../page/index";

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const shoppingCartPage = new ShoppingCartPage();

describe("Verifying Process of Adding the Sauce Labs Backpack and Sauce Labs Onesie Products to the shopping cart for SauceDemo", () => {
    before(() => {
        cy.visit("https://www.saucedemo.com/");

        loginPage.login("standard_user", "secret_sauce");

        // Assertion for showing a black button with background color white to add the Sauce Labs Backpack product to the shopping cart
        inventoryPage.getAddToCartBackpackButton()
            .should('have.text', 'Add to cart')
            .should('have.class', 'btn_primary')
            .should('have.css', 'background-color', 'rgb(255, 255, 255)')
            .should('have.css', 'color', 'rgb(19, 35, 34)');

        // Assertion for showing a black button with background color white to add the Sauce Labs Onesie product to the shopping cart
        inventoryPage.getAddToCartOnesieButton()
            .should('have.text', 'Add to cart')
            .should('have.class', 'btn_primary')
            .should('have.css', 'background-color', 'rgb(255, 255, 255)')
            .should('have.css', 'color', 'rgb(19, 35, 34)');

        // Assertion for verifying that the shopping cart icon doesn't have a badge next to it.
        shoppingCartPage.getShoppingCartIcon().should('not.contain.html','span');

        shoppingCartPage.goToShoppingCartPage();

        // Assertion for verifying the cart list doesn't have any added products.
        shoppingCartPage.getShoppingCartList().should('have.length', 0);

        shoppingCartPage.goToInventoryPage();
    });

    it("Should correctly add these two products to the cart list while appearing a cart badge next to the cart icon with the right number of the products added to it", () => {
        inventoryPage.addBackpackToCart();

        // Assertion for showing a red button with background color white to remove the Sauce Labs Backpack product from the shopping cart
        inventoryPage.getRemoveFromCartBackpackButton()
            .should('have.text', 'Remove')
            .should('have.class', 'btn_secondary')
            .should('have.css', 'background-color', 'rgb(255, 255, 255)')
            .should('have.css', 'color', 'rgb(226, 35, 26)');

        // Assertion for verifying that the shopping cart icon has now a badge next to it.
        shoppingCartPage.getShoppingCartIcon().should('contain.html','span');

        // Assertion for showing the number 1 in the red badge due to addition of the Sauce Labs Backpack product to the shopping cart.
        shoppingCartPage.getShoppingCartBadge()
            .should('have.text', '1')
            .should('have.css', 'background-color', 'rgb(226, 35, 26)')
            .should('have.css', 'color', 'rgb(255, 255, 255)');

        shoppingCartPage.goToShoppingCartPage();

        // Assertion for verifying the cart list has one product added (Sauce Labs Backpack).
        shoppingCartPage.getShoppingCartList().should('have.length', 1);

        shoppingCartPage.goToInventoryPage();

        inventoryPage.addOnesieToCart();

        // Assertion for showing a red button with background color white to remove the Sauce Labs Backpack product from the shopping cart
        inventoryPage.getRemoveFromCartOnesieButton()
            .should('have.text', 'Remove')
            .should('have.class', 'btn_secondary')
            .should('have.css', 'background-color', 'rgb(255, 255, 255)')
            .should('have.css', 'color', 'rgb(226, 35, 26)');

        // Assertion for showing the number 2 in the red badge due to addition of the Sauce Labs Onesie product to the shopping cart.
        shoppingCartPage.getShoppingCartBadge()
            .should('have.text', '2')
            .should('have.css', 'background-color', 'rgb(226, 35, 26)')
            .should('have.css', 'color', 'rgb(255, 255, 255)');

        shoppingCartPage.goToShoppingCartPage();

        // Assertion for verifying the cart list has two products added (Sauce Labs Backpack and Sauce Labs Onesie).
        shoppingCartPage.getShoppingCartList().should('have.length', 2);

        // Assertion for verifying it exists a product called 'Sauce Labs Backpack' in the shopping cart.
        shoppingCartPage.getBackpackProduct()
            .should("exist")
            .should('have.text', 'Sauce Labs Backpack');

        // Assertion for verifying it exists a product called and 'Sauce Labs Onesie' in the shopping cart
        shoppingCartPage.getOnesieProduct()
            .should("exist")
            .should('include.text', 'Sauce Labs Onesie');
    });
});