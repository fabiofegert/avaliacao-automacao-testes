Feature: Visualizar extrato da conta

  Scenario: Usuario acessa o extrato apos login
    Given que o usuario acessa o site para ver o extrato
    When preenche login no extrato com o usuario "john" e senha "demo"
    And clica no botao de login do extrato
    And acessa a conta detalhada
    Then ele deve visualizar o historico de transacoes