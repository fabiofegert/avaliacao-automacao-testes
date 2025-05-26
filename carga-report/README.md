# 📈 Avaliação Técnica - Testes de Carga com K6

Este módulo contém a automação de testes de **carga** utilizando a ferramenta [K6](https://k6.io/).

---

## 📁 Estrutura

carga-report/
├── scripts/
│ └── test-carga.js # Script principal de carga
├── results/
│ ├── summary.json # Resultado bruto dos testes
│ └── summary.html # Relatório visual


---

## ✅ Requisitos

- Node.js 18+
- K6 instalado globalmente ou via Docker

---

## 🚀 Como executar o teste de carga

### 1. Acesse a pasta do projeto

```
cd carga-report
2. (Opcional) Instalar dependências futuras

npm install
3. Executar o teste com K6

k6 run scripts/test-carga.js --summary-export=results/summary.json
4. (Opcional) Visualizar resultado como HTML

npm install -g summary-to-html
summary-to-html results/summary.json > results/summary.html
Se não quiser instalar o pacote global, pode usar algum visualizador online ou manter o .json.

📄 Resultado Esperado
Arquivo summary.json gerado em results/

(Opcional) Arquivo summary.html para visualização gráfica

🔗 Autor
Fábio Fegert – QA Sênior com foco em automação, performance e qualidade contínua