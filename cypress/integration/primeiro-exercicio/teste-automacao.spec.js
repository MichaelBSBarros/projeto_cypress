/// <reference types="cypress" />

describe('site automacao', () => {
    
    it('Criar novo usuário', () => {
    
        const BTN_AUTOMACAO = '#index-banner > .container > :nth-child(3) > a'
        const BTN_FORM = 'body > div.row > div.col.s3 > ul > li:nth-child(1) > a'
        const BTN_CREATE_USER = 'body > div.row > div.col.s3 > ul > li.bold.active > div > ul > li:nth-child(1) > a'
        const BTN_CREATE_USER_FORM = '.actions'
        const ALERT_CREATED_USER = '.row .center #notice'
    
        cy.visit('https://automacaocombatista.herokuapp.com/')
        cy.get(BTN_AUTOMACAO).should('contain.text', "Começar Automação Web").click()
        cy.get(BTN_FORM).click()
        cy.get(BTN_CREATE_USER).click()
        
        cy.get('#user_name').type('Massa')
        cy.get('#user_lastname').type('Teste')
        cy.get('#user_email').type('teste@teste.com')
        cy.get('#user_address').type('622 Broadway New York, NY 10012')
        cy.get('#user_university').type('UCLA')
        cy.get('#user_profile').type('QA')
        cy.get('#user_gender').type('Male')
        cy.get('#user_age').type('43')
    
        cy.get(BTN_CREATE_USER_FORM).click()
        cy.get(ALERT_CREATED_USER).should('contain.text', "Usuário Criado com sucesso")
    
    })
})

