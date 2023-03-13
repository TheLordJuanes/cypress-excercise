class InventoryPage {
    private readonly title: string;
    private readonly addToCartBackpackButton : string;
    private readonly addToCartOnesieButton : string;
    private readonly removeFromCartBackpackButton : string;
    private readonly removeFromCartOnesieButton : string;

    constructor() {
        this.title = ".title";
        this.addToCartBackpackButton = '[data-test="add-to-cart-sauce-labs-backpack"]';
        this.addToCartOnesieButton = '[data-test="add-to-cart-sauce-labs-onesie"]';
        this.removeFromCartBackpackButton = '[data-test="remove-sauce-labs-backpack"]';
        this.removeFromCartOnesieButton = '[data-test="remove-sauce-labs-onesie"]';
    }

    public getAddToCartBackpackButton() {
        return cy.get(this.addToCartBackpackButton);
    }

    public addBackpackToCart() {
        cy.get(this.addToCartBackpackButton).click();
    }

    public getAddToCartOnesieButton() {
        return cy.get(this.addToCartOnesieButton);
    }

    public addOnesieToCart() {
        cy.get(this.addToCartOnesieButton).click();
    }

    public getRemoveFromCartBackpackButton() {
        return cy.get(this.removeFromCartBackpackButton);
    }

    public getRemoveFromCartOnesieButton() {
        return cy.get(this.removeFromCartOnesieButton);
    }

    public getInventoryTitle() {
        return cy.get(this.title);
    }
}

export { InventoryPage }