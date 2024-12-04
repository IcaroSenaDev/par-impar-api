document.getElementById('formulario').addEventListener('submit', async (event) => {
  event.preventDefault(); // Impede o envio do formulário e recarregamento da página

  const numero = parseInt(document.getElementById('numero').value);

  // Validação simples
  if (isNaN(numero)) {
    alert('Por favor, insira um número válido.');
    return;
  }

  try {
    // Envia a requisição para a API
    const response = await fetch('/verificar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ numero }),
    });

    const data = await response.json();

    // Exibe o resultado
    document.getElementById('resultado').innerText = data.resultado;
  } catch (error) {
    console.error('Erro ao comunicar com o servidor:', error);
    document.getElementById('resultado').innerText = 'Erro ao verificar o número.';
  }
});
