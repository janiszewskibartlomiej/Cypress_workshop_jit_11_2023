/// <reference types="cypress" />

import homePage from "../../pages/homePage";
import loginPage from "../../pages/loginPage";
import user from "../../fixtures/userData.json";

it("Login test case", () => {
  homePage.goToHomePage();
  cy.url().should("include", "automationexercise");
  homePage.clickOnSignin();
  loginPage.loginUser(user.userCreated.login, user.userCreated.password);
  cy.contains("Logged in as " + user.pformella.login).should("exist");
});

it.only('Singup test case', () => {
  homePage.goToHomePage();
  cy.url().should("include", "automationexercise");
  homePage.clickOnSignin();
  loginPage.singupUser();
  cy.contains('Enter Account Information').should('exist')
  
});