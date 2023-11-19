class homePage {
  elements = {
    loginBtn: () => cy.get('a[href="/login"]'),
  };

  goToHomePage() {
    cy.visit("https://automationexercise.com/");
  }

  clickOnSignin() {
    this.elements.loginBtn().click();
  }
}

export default new homePage();
