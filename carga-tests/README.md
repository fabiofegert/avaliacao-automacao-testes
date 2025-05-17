# Testes de Carga com K6 – Avaliação Técnica

## 🔍 Cenário Executado

Realizei um teste de carga utilizando a ferramenta [K6](https://k6.io/) com o objetivo de validar o comportamento de uma API pública sob alta concorrência.

- **API testada:** https://serverest.dev/usuarios
- **Duração:** 5 minutos
- **Usuários simultâneos (VUs):** 500
- **Total de requisições:** 53.321
- **Relatório salvo em:** `resultado-carga.json`

---

## 📈 Resultados Obtidos

| Métrica                 | Valor               |
|------------------------|---------------------|
| Requisições totais     | 53.321              |
| Sucesso (status 200)   | 8.794 (16.49%)      |
| Falhas (timeouts, EOF) | 44.527 (83.5%)      |
| Duração média (req)    | 1.77s               |
| Pico de resposta       | 17.99s              |

---

## 📌 Análise Técnica

Durante a simulação, foi possível observar uma alta taxa de falhas (`unexpected EOF`, `timeout`, `connection reset`). Esses erros indicam que a API pública da ServeRest provavelmente possui:

- Limitação de conexões simultâneas
- Rejeição de requisições por throttle automático
- Infraestrutura não preparada para testes de stress real

Mesmo assim, o teste foi importante para:

- Avaliar a capacidade de resiliência da aplicação
- Identificar o ponto de quebra (threshold)
- Praticar análise de métricas em um cenário realista

---

## 🧠 Conclusão

A API não resistiu à carga de 500 usuários simultâneos, o que é esperado para serviços públicos com limitação proposital.  
Caso esse teste fosse aplicado em ambiente controlado (dev/staging), seria possível analisar o consumo de recursos da aplicação e os gargalos reais do back-end com mais precisão.

---

## ▶️ Execução do teste

```bash
k6 run teste_carga_oficial.js --out json=resultado-carga.json
