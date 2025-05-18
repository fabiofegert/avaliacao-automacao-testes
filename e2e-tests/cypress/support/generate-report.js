const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "cypress/cucumber-json", // onde ficam os arquivos .json do cucumber
  reportPath: "cypress/reports",
  metadata: {
    browser: {
      name: "chrome",
      version: "auto",
    },
    device: "Local QA Machine",
    platform: {
      name: "windows",
      version: "10",
    },
  },
  customData: {
    title: "Relatório de Testes",
    data: [
      { label: "Projeto", value: "Avaliação Automação QA" },
      { label: "Executado por", value: "Fábio Fegert" },
      { label: "Data", value: new Date().toLocaleString("pt-BR") },
    ],
  },
});
