Feature: Login do usuario

  Scenario: Login com credenciais validas
    Given que o usuario acessa o site do Parabank
    When ele preenche o usuario "john" e a senha "demo"
    And clica no botao de login
    Then o usuario deve ser redirecionado para a pagina de contas

  Scenario: Login com senha incorreta
    Given que o usuario acessa o site do Parabank
    When ele preenche o usuario "john" e a senha "senhaErrada"
    And clica no botao de login
    Then deve visualizar a mensagem de erro "The username and password could not be verified."