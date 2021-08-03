/// <reference types="cypress" />

describe('Criar conta Livelo', () => {    
    it('Gerar CPF e criar conta na Livelo', () => {

        cy.requestCPF().then(response => {

            expect(response.body.status).to.be.true
            cy.log(response.body.number_formatted)
            cy.log(response.body.number)
            
            cy.wrap({'cpf_number_formatted': response.body.number_formatted,
                'cpf_number': response.body.number}).as('cpfs')

            // Cypress.env('cpf_number_formatted', response.body.number_formatted)
            // Cypress.env('cpf_number', response.body.number)

        })

        cy.get('@cpfs').then( cpfs => {
            cy.wrap({cpfs, idUser: 'id12456'}).as('cpfs')

            cy.get('@cpfs').then( obj => {
                obj.cpfs.cpf_number_formatted
                obj.idUser
            })

            const CPF_NUM_FORMAT = cpfs.cpf_number_formatted
            const CPF_NUM = cpfs.cpf_number

            cy.log(CPF_NUM_FORMAT)
            cy.log(CPF_NUM)

            const BTN_CREATACCOUNT = '#span-controlText > #span-createAccountText'

            cy.visit('https://www.livelo.com.br/')
            
            cy.wait(2000)        
            cy.get(BTN_CREATACCOUNT).should('contain.text', "Crie sua conta").click()
            
            cy.wait(2000)
            cy.get('#fake-username-2').type(CPF_NUM_FORMAT)
            
            cy.wait(2000)
            cy.get('#btn-register').click()
            
            cy.wait(60000)
    
            cy.get('#fullName').type('John Doe')
            cy.get('#birthDate').type('01051971')
            cy.get('#email').type(CPF_NUM + '@teste.com')
            cy.get('#cellphone').click({ force: true })
            cy.wait(60000)
            cy.get('#cellphone').type('21999887766')
        })

        // const CPF_NUM_FORMAT = Cypress.env('cpf_number_formatted')  
        // const CPF_NUM = Cypress.env('cpf_number')

        
        
        // const BTN_CREATACCOUNT = '#span-controlText > #span-createAccountText'

        // cy.visit('https://www.livelo.com.br/')
        
        // cy.wait(2000)        
        // cy.get(BTN_CREATACCOUNT).should('contain.text', "Crie sua conta").click()
        
        // cy.wait(2000)
        // cy.get('#fake-username-2').type(CPF_NUM_FORMAT)
        
        // cy.wait(2000)
        // cy.get('#btn-register').click()
        
        // cy.wait(60000)

        // cy.get('#fullName').type('John Doe')
        // cy.get('#birthDate').type('01051971')
        // cy.get('#email').type(CPF_NUM + '@teste.com')
        // cy.get('#cellphone').click({ force: true })
        // cy.wait(60000)
        // cy.get('#cellphone').type('21999887766')
        

    })
})