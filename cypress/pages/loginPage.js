import user from "../fixtures/userData.json";

class loginPage {
  elements = {
    emailInput: () => cy.get('[data-qa="login-email"]'),
    passwordInput: () => cy.get('[data-qa="login-password"]'),
    singup: () => cy.get('[data-qa="login-button"]'),
    nameImput: () => cy.get('[data-qa="signup-name"]'),
    emailSingupInput: () => cy.get('[data-qa="signup-email"]'),
    singupButton: () => cy.get('[data-qa="signup-button"]'),
  };

  loginUser(email, password) {
    this.elements.emailInput().type(email),
      this.elements.passwordInput().type(password),
      this.elements.singup().click();
  }

  singupUser() {
    let naszaZmienna = this.randomInteger(1, 200);
    let username = "bartJan"
    let email = username + "1234" + naszaZmienna + "@jit.team";
    cy.log(naszaZmienna, email);

    this.elements.nameImput().type(username),
    this.elements.emailSingupInput().type(email),
    this.elements.singupButton().click();
  }

  fillSingupForm() {

  }

  randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export default new loginPage();
