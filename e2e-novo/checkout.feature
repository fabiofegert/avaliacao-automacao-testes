Feature: Simulação de abertura de conta

  Scenario: Usuário acessa a tela e realiza abertura de conta com sucesso
    Given que o usuário já está logado no Parabank
    When acessa a página de abertura de conta
    And seleciona o tipo de conta "SAVINGS"
    And confirma a abertura da conta
    Then deve visualizar uma mensagem de sucesso com o número da nova conta