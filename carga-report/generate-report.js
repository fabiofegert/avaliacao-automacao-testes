const fs = require('fs');
const path = './results/summary.json';

if (!fs.existsSync(path)) {
  console.error('❌ Arquivo summary.json não encontrado.');
  process.exit(1);
}

const summary = JSON.parse(fs.readFileSync(path, 'utf8'));

const html = `
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Relatório K6 - Teste de Carga</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; background: #f9f9f9; }
    h1 { color: #333; }
    pre { background: #eee; padding: 15px; border-radius: 5px; overflow-x: auto; }
  </style>
</head>
<body>
  <h1>Relatório de Teste de Carga - K6</h1>
  <pre>${JSON.stringify(summary, null, 2)}</pre>
</body>
</html>
`;

fs.writeFileSync('./results/summary.html', html);
console.log('✅ Relatório HTML gerado: results/summary.html');