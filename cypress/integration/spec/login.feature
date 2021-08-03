Feature: Login
 
    Background: Iniciar na página de exemplo
        Given que esteja na página de login
        
 
    Scenario Outline: Realizar login
        When logar com um usuário do tipo "<tipo>"
        Then deverá "<resultado>"
        Examples:
            | tipo     | resultado                      |
            | valido   | ser direcionado para a home    |
            | invalido | deverá notificar acesso negado |