Feature: Simulacao de abertura de conta

  Scenario: Usuario acessa a tela e realiza abertura de conta com sucesso
    Given que o usuario ja esta logado no Parabank
    When acessa a pagina de abertura de conta
    And seleciona o tipo de conta "SAVINGS"
    And confirma a abertura da conta
    Then deve visualizar uma mensagem de sucesso com o numero da nova conta