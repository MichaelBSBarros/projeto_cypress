Feature: Login
 
    Background: Iniciar na página de exemplo
        Given que esteja na página de login
        
 
    Scenario Outline: Realizar login com usuário tipo "<tipo>"
        When logar com um usuário do tipo "<tipo>"
        Examples:
            | tipo               |
            | empty              |
            | problem            |
            | locked             |
            | valid              |
