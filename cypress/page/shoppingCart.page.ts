class ShoppingCartPage {
    private readonly list : string;
    private readonly icon : string;
    private readonly badge : string;
    private readonly backPackElement : string;
    private readonly onesieElement : string;
    private readonly continueShoppingButton : string;

    constructor() {
        this.icon = '.shopping_cart_link';
        this.list = '.cart_list > .cart_item';
        this.badge = '.shopping_cart_badge';
        this.backPackElement = '#item_4_title_link > .inventory_item_name';
        this.onesieElement = '#item_2_title_link > .inventory_item_name';
        this.continueShoppingButton = '[data-test="continue-shopping"]';
    }

    public getShoppingCartIcon() {
        return cy.get(this.icon);
    }

    public getShoppingCartBadge() {
        return cy.get(this.badge);
    }

    public goToShoppingCartPage() {
        cy.get(this.icon).click();
    }

    public getShoppingCartList() {
        return cy.get(this.list);
    }

    public getBackpackProduct() {
        return cy.get(this.backPackElement);
    }

    public getOnesieProduct() {
        return cy.get(this.onesieElement);
    }

    public goToInventoryPage() {
        cy.get(this.continueShoppingButton).click();
    }
}

export { ShoppingCartPage }