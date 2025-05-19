Feature: Login do usuário

  Scenario: Login com credenciais válidas
    Given que o usuário acessa o site do Parabank
    When ele preenche o usuário "john" e a senha "demo"
    And clica no botão de login
    Then o usuário deve ser redirecionado para a página de contas

  Scenario: Login com senha incorreta
    Given que o usuário acessa o site do Parabank
    When ele preenche o usuário "john" e a senha "senhaErrada"
    And clica no botão de login
    Then deve visualizar a mensagem de erro "The username and password could not be verified."