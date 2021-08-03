import Base from '../_base.page'
import {Login as log} from '../components/sauce_elements/login.elements'

export class Sauce_login extends Base {
    
    static acessar_sauce_demo(){
        cy.visit('/')
    }

    static logar_sauce_demo(usuario, senha){
        //super.typeValue(log.INP_USER, "standard_user")

        cy.get(log.IMP_USER).type(usuario)
        cy.get(log.IMP_PASS).type(senha)        
        super.clickOnElement(log.BTN_LOGIN)

        cy.get(log.BTN_LOGOUT).should('exist');
    }
}