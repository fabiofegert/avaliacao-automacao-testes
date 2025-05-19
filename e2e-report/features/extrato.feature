Feature: Visualizar extrato da conta

  Scenario: Usuário acessa o extrato após login
    Given que o usuário acessa o site para ver o extrato
    When preenche login no extrato com o usuário "john" e senha "demo"
    And clica no botão de login do extrato
    And acessa a conta detalhada
    Then ele deve visualizar o histórico de transações