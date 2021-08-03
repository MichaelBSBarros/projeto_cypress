/// <reference types="cypress" />
import {Given, When, Then, Before} from 'cypress-cucumber-preprocessor/steps'

//import {Sauce, Souce} from '../../pages/sauce.page/sauce.page'
import {Sauce_login, login} from '../../pages/sauce.page/sauce.login'
import {Sauce_add_carrinho, add_carrinho} from '../../pages/sauce.page/sauce.addCarrinho'
import {Sauce_cont_carrinho, cont_carrinho} from '../../pages/sauce.page/sauce.contCarrinho'
import {Sauce_validar_carrinho, validar_carrinho} from '../../pages/sauce.page/sauce.validarCarrinho'


Given(`que esteja na página de login`, () => {
    Sauce_login.acessar_sauce_demo();
});

Given(`que esteja logado com usuario {string} e senha {string}`, (usuario, senha) => {    
    Sauce_login.logar_sauce_demo(usuario, senha);
});

When(`adicionar produtos ao carrinho {string}`, (produto) => {
    Sauce_add_carrinho.adicionar_carrinho_sauce_demo(produto);
});

Then(`a quantidade de itens no carrinho deve aumentar`, () => {
    Sauce_cont_carrinho.cont_carrinho_sauce_demo();
});

Then(`os produtos devem ser adicionados ao carrinho`, () => {    
    Sauce_validar_carrinho.validar_carrinho_sauce_demo();
    //cy.stepNotImplemented();
});
