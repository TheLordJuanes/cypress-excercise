class LoginPage {
    private usernameInput: string;
    private passwordInput: string;
    private loginButton: string;
    private errorMsg: string;

    constructor() {
        this.usernameInput = "[data-test='username']";
        this.passwordInput = "[data-test='password']";
        this.loginButton = "[data-test='login-button']";
        this.errorMsg = "[data-test='error']";
    }

    public login(email: string, password: string) {
        cy.get(this.usernameInput).type(email);
        cy.get(this.passwordInput).type(password);
        cy.get(this.loginButton).click();
    }

    public getErrorMsg() {
        return cy.get(this.errorMsg);
    }
}

export { LoginPage }