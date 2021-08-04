import Base from '../_base.page'
import {Login as log} from '../components/sauce_elements/login.elements'

export class Sauce_login extends Base {
    
    static acessar_sauce_demo(){
        cy.visit('/')
    }

    static logar_sauce_demo(usuario, password){

        if (usuario != ' ') {
            //super.typeValue(log.INP_USER, "standard_user")
            cy.get(log.IMP_USER).type(usuario)
            cy.get(log.IMP_PASS).type(password)             
        };

        super.clickOnElement(log.BTN_LOGIN)
        
        //switch (usuario) {
        //    case 'standard_user':
        //        return { 
        //            tipoUser : true
        //        }
        //    case 'locked_out_user':
        //        return {
        //            tipoUser : false,
        //            msg : "Sorry, this user has been locked out."    
        //        }
        //    case 'problem_user':
        //            return {
        //                tipoUser : true    
        //            }
        //    case ' ':
        //        return {
        //            tipoUser : false,
        //            msg : "Username is required"     
        //        }
        //};
        //
        //if (tipoUser == true){
        //    cy.get(log.BTN_LOGOUT).should('exist')
        //}else{
        //    cy.get(log.WRN_LOGIN_FAIL).should('contain.text', msg)
        //};

        if (usuario == 'standard_user' || usuario == 'problem_user') {
            
            cy.get(log.BTN_OPTIONS).click()
            cy.get(log.BTN_LOGOUT).should('exist')
        
        }else if (usuario == 'locked_out_user') {
        
            var msg = "Sorry, this user has been locked out."
            cy.get(log.WRN_LOGIN_FAIL).should('contain.text', msg)
        
        }else if (usuario == ' ') {
            
            var msg = "Username is required"
            cy.get(log.WRN_LOGIN_FAIL).should('contain.text', msg)
        
        };        
    }
}