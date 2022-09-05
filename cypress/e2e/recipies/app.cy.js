/// <reference types="cypress" />

describe('Recipes app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/')
    })

    it('displays app', () => {
        cy.get('h1').should('have.text', 'Recipes')
        cy.get('input').should('be.focused')
        cy.get('button').should('have.text', 'Search')
    })

    it('submits form on button click', () => {
        cy.get('input').type('sour').should('have.value', 'sour')
        cy.get('button').click()
    })

    it('submits form on "Enter" key press', () => {
        cy.get('input').as('input').type('sour').should('have.value', 'sour')
        cy.get('@input').type('{enter}')
    })

    it('should show loading state', () => {
        cy.intercept(
            'https://www.thecocktaildb.com/api/json/v1/1/*',
            (request) => {
                request.on('response', (res) => {
                    res.setThrottle(1000)
                })
            }
        )

        cy.get('input').type('sour')
        cy.get('button').click()
        cy.get('p').should('have.text', 'Loading...')
    })

    it('should show error state', () => {
        cy.intercept(
            'https://www.thecocktaildb.com/api/json/v1/1/*',
            (request) => {
                request.reply({
                    statusCode: 400,
                    body: 'Error',
                })
            }
        )

        cy.get('input').type('sour')
        cy.get('button').click()
        cy.get('p').should(
            'have.text',
            'Ooops, error happend :( Please try again.'
        )
    })

    it('should render cocktails list', () => {
        cy.intercept('https://www.thecocktaildb.com/api/json/v1/1/*').as(
            'getCocktails'
        )
        cy.get('input').as('input').type('sour').should('have.value', 'sour')
        cy.get('@input').type('{enter}')

        cy.wait('@getCocktails').should(({ response }) => {
            const numOfCocktails = response.body.drinks.length
            cy.get('[data-testid="item"]').should('have.length', numOfCocktails)
        })
    })

    it('should render cocktail data', () => {
        cy.intercept('https://www.thecocktaildb.com/api/json/v1/1/*').as(
            'getCocktails'
        )
        cy.get('input').as('input').type('sour').should('have.value', 'sour')
        cy.get('@input').type('{enter}')

        cy.wait('@getCocktails').should(({ response }) => {
            const firstElementData = response.body.drinks[0]

            cy.get('[data-testid="item"]').eq(0).as('first')

            cy.get('@first')
                .find('[data-testid="title"]')
                .should('have.text', firstElementData.strDrink)

            cy.get('@first')
                .find('[data-testid="ingredient"]')
                .should('have.length.gt', 0)

            cy.get('@first')
                .find('[data-testid="ingredient"]')
                .eq(0)
                .should('have.text', firstElementData.strIngredient1)
        })
    })
})
