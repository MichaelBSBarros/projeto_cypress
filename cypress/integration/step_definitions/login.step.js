/// <reference types="cypress" />
import {Given, When, Then, Before} from 'cypress-cucumber-preprocessor/steps'

import {Sauce_login} from '../../pages/sauce.page/sauce.login'
//import {Sauce_add_carrinho, add_carrinho} from '../../pages/sauce.page/sauce.addCarrinho'
//import {Sauce_cont_carrinho, cont_carrinho} from '../../pages/sauce.page/sauce.contCarrinho'
//import {Sauce_validar_carrinho, validar_carrinho} from '../../pages/sauce.page/sauce.validarCarrinho'
import {Sauce_login_massas} from '../../pages/sauce.page/sauce_login_massas'

//Before(() => {
//    console.log("before all")
//})

Given(`que esteja na página de login`, () => {
	cy.stepNotImplemented();
});

When(`logar com um usuário do tipo {string}`, (tipo) => {

	//console.log(args1);
    //cy.stepNotImplemented();
    
    let usuario = Sauce_login_massas.buscarTipo(tipo)
    Sauce_login.logar_sauce_demo(usuario.usuario, usuario.password)
    console.log()

});
