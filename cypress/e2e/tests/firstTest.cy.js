/// <reference types="cypress" />

import user from "../../fixtures/userData.json"

beforeEach(() => {
    cy.visit('/')
    cy.url().should('include', 'automationexercise')
})

it('First test', () => {
    let naszaZmienna = randomInteger(1, 1000)
    let email = 'przemyslaw.formella1234' + naszaZmienna + '@jit.team'

    cy.log(naszaZmienna)
    cy.log('to nasz e-mail: ', email)


    cy.get('a[href="/login"]').click()
    cy.get('.signup-form > h2').should('have.text', 'New User Signup!')
    cy.get('[data-qa="signup-name"]').type(user.pformella.login)
    cy.get('[data-qa="signup-email"]').type(email)
    cy.get('[data-qa="signup-button"]').click()
    cy.get(':nth-child(1) > b').should('have.text', 'Enter Account Information')
    cy.contains('Enter Account Information').should('exist')
    cy.get('#id_gender1').click()
    cy.get('[data-qa="name"]').should('have.value', user.pformella.login)
    cy.get('[data-qa="email"]').should('have.value', email)
    cy.get('[data-qa="password"]').type('1234567890')
    cy.get('[data-qa="days"]').select('1')
    cy.get('[data-qa="months"]').select('August')
    cy.get('[data-qa="years"]').select('2000')
    cy.get('#newsletter').check()
    cy.get('#optin').check()
    cy.get('[data-qa="first_name"]').type('Przemek')
    cy.get('[data-qa="last_name"]').type('For')
    cy.get('[data-qa="address"]').type('łużycka')
    cy.get('[data-qa="country"]').select('Canada')
    cy.get('[data-qa="state"]').type('Polska')
    cy.get('[data-qa="city"]').type('Gdynia')
    cy.get('[data-qa="zipcode"]').type('123-456')
    cy.get('[data-qa="mobile_number"]').type('123456789')
    cy.get('[data-qa="create-account"]').click()
    cy.get('b').should('have.text', 'Account Created!')
    cy.get('[data-qa="continue-button"]').click()
    cy.contains('Logged in as ' + user.pformella.login).should('exist')
    cy.contains('Delete Account').click()
    cy.contains('Account Deleted!').should('exist')
    cy.get('[data-qa="continue-button"]').click()
});

it.only('Second test', () => {
    cy.get('a[href="/login"]').click()
    cy.get('.signup-form > h2').should('have.text', 'New User Signup!')
    cy.get('.login-form > h2').should('have.text', 'Login to your account')
    cy.get('[data-qa="login-email"]').type(user.userCreated.login)
    cy.get('[data-qa="login-password"]').type(user.userCreated.password)
    cy.get('[data-qa="login-button"]').click()
    cy.contains('Logged in as ' + user.pformella.login).should('exist')
});

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}