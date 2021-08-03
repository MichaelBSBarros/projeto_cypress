//import Base from '../_base.page'
//import {Carrinho as cart} from '../components/sauce.elements'
//import {Produto as prod} from '../components/sauce.elements'
//
//export class Sauce extends Base {
//
//    static adicionar_carrinho_sauce_demo(produto){
//
//        cy.get(cart.QDT_PROD_CART).should('not.exist');
//
//        cy.get(prod.BTN_SELEC_PROD).should('contain.text', produto).click()
//        super.clickOnElement(prod.BTN_ADD_CART)
//        cy.get(cart.BTN_REMOV_CART).should('exist')
//
//        cy.wrap({'prod': produto}).as('produto')
//        
//    }
//
//    static cont_carrinho_sauce_demo(){
//
//        cy.get(cart.QDT_PROD_CART).should('exist');
//
//    }
//
//    static validar_carrinho_sauce_demo(){
//        
//        cy.get('@produto').then( produto => {
//            
//            cy.wrap({produto}).as('produto')
//            
//            cy.get('@produto').then( obj => {
//                obj.produto.prod
//            })
//
//            const prod = produto.prod
//
//            cy.get(cart.BTN_CARRINHO).click()
//            cy.get('#item_4_title_link > div').should('contain.text', prod) 
//
//        })
//
//    }
//
//}