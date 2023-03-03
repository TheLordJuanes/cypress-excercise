describe("Verifying Process of Adding the Sauce Labs Backpack and Sauce Labs Onesie Products to the shopping cart for SauceDemo", () => {
    before(() => {
        cy.visit("https://www.saucedemo.com/");
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();

        // Assertion for showing a black button with background color white to add the Sauce Labs Backpack product to the shopping cart
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
            .should('have.text', 'Add to cart')
            .should('have.class', 'btn_primary')
            .should('have.css', 'background-color', 'rgb(255, 255, 255)')
            .should('have.css', 'color', 'rgb(19, 35, 34)');

        // Assertion for showing a black button with background color white to add the Sauce Labs Onesie product to the shopping cart
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]')
            .should('have.text', 'Add to cart')
            .should('have.class', 'btn_primary')
            .should('have.css', 'background-color', 'rgb(255, 255, 255)')
            .should('have.css', 'color', 'rgb(19, 35, 34)');

        // Assertion for verifying that the shopping cart icon doesn't have a badge next to it.
        cy.get('.shopping_cart_link').should('not.contain.html','span');

        cy.get('.shopping_cart_link').click();

        // Assertion for verifying the cart list doesn't have any added products.
        cy.get('.cart_list > .cart_item').should('have.length', 0);

        cy.get('[data-test="continue-shopping"]').click();
    });

    it("Should correctly add these two products to the cart list while appearing a cart badge next to the cart icon with the right number of the products added to it", () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

        // Assertion for showing a red button with background color white to remove the Sauce Labs Backpack product from the shopping cart
        cy.get('[data-test="remove-sauce-labs-backpack"]')
            .should('have.text', 'Remove')
            .should('have.class', 'btn_secondary')
            .should('have.css', 'background-color', 'rgb(255, 255, 255)')
            .should('have.css', 'color', 'rgb(226, 35, 26)');

        // Assertion for verifying that the shopping cart icon has now a badge next to it.
        cy.get('.shopping_cart_link').should('contain.html','span');

        // Assertion for showing the number 1 in the red badge due to addition of the Sauce Labs Backpack product to the shopping cart.
        cy.get('.shopping_cart_badge')
            .should('have.text', '1')
            .should('have.css', 'background-color', 'rgb(226, 35, 26)')
            .should('have.css', 'color', 'rgb(255, 255, 255)');

        cy.get('.shopping_cart_link').click();

        // Assertion for verifying the cart list has one product added (Sauce Labs Backpack).
        cy.get('.cart_list > .cart_item').should('have.length', 1);

        cy.get('[data-test="continue-shopping"]').click();

        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();

        // Assertion for showing a red button with background color white to remove the Sauce Labs Backpack product from the shopping cart
        cy.get('[data-test="remove-sauce-labs-onesie"]')
            .should('have.text', 'Remove')
            .should('have.class', 'btn_secondary')
            .should('have.css', 'background-color', 'rgb(255, 255, 255)')
            .should('have.css', 'color', 'rgb(226, 35, 26)');

        // Assertion for showing the number 2 in the red badge due to addition of the Sauce Labs Onesie product to the shopping cart.
        cy.get('.shopping_cart_badge')
            .should('have.text', '2')
            .should('have.css', 'background-color', 'rgb(226, 35, 26)')
            .should('have.css', 'color', 'rgb(255, 255, 255)');

        cy.get('.shopping_cart_link').click();

        // Assertion for verifying the cart list has two products added (Sauce Labs Backpack and Sauce Labs Onesie).
        cy.get('.cart_list > .cart_item').should('have.length', 2);

        // Assertion for verifying it exists a product called 'Sauce Labs Backpack' in the shopping cart.
        cy.get('#item_4_title_link > .inventory_item_name')
            .should("exist")
            .should('have.text', 'Sauce Labs Backpack');

        // Assertion for verifying it exists a product called and 'Sauce Labs Onesie' in the shopping cart
        cy.get('#item_2_title_link > .inventory_item_name')
            .should("exist")
            .should('include.text', 'Sauce Labs Onesie');
    });
});