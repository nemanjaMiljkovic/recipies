/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5174/')
    });


    it('displays page', () => {
        cy.get("h1").should('have.text', "Recipes");
    })

})
