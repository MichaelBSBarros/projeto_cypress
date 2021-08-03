/// <reference types="cypress" />
import {Given, When, Then, Before} from 'cypress-cucumber-preprocessor/steps'

//import {Sauce_login, login} from '../../pages/sauce.page/sauce.login'
//import {Sauce_add_carrinho, add_carrinho} from '../../pages/sauce.page/sauce.addCarrinho'
//import {Sauce_cont_carrinho, cont_carrinho} from '../../pages/sauce.page/sauce.contCarrinho'
//import {Sauce_validar_carrinho, validar_carrinho} from '../../pages/sauce.page/sauce.validarCarrinho'

Given(`que esteja na página de login`, () => {
	cy.stepNotImplemented();
});

When(`logar com um usuário do tipo {string}`, (args1) => {
	console.log(args1);
	cy.stepNotImplemented();
});

Then(`deverá {string}`, (args1) => {
	console.log(args1);
	cy.stepNotImplemented();
});
