const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Função para verificar se o número é par ou ímpar
function verificarParOuImpar(numero) {
  if (isNaN(numero)) {
    return 'Erro: O valor fornecido não é um número válido.';
  }
  
  if (numero % 2 === 0) {
    return 'O número é PAR.';
  } else {
    return 'O número é ÍMPAR.';
  }
}

// Rota POST para verificar se o número é par ou ímpar
app.post('/verificar', (req, res) => {
  const { numero } = req.body;

  if (numero === undefined || numero === null) {
    return res.status(400).json({ error: 'Por favor, forneça um número válido.' });
  }

  const resultado = verificarParOuImpar(numero);

  if (resultado.startsWith('Erro')) {
    return res.status(400).json({ error: resultado });
  }

  res.json({ resultado });
});

// Rota para a página principal (HTML)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
