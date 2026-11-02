const express = require('express');
const app = express();
const PORT = 3030;


const estilosCSS = `
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f6f9;
      color: #333;
      max-width: 800px;
      margin: 40px auto;
      padding: 20px;
      background: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    }
    h1 { color: #1e293b; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; }
    h2, h3 { color: #475569; }
    ul { line-height: 1.8; }
    a { color: #2563eb; text-decoration: none; font-weight: bold; }
    a:hover { text-decoration: underline; color: #1d4ed8; }
    hr { border: 0; border-top: 1px solid #e2e8f0; margin: 25px 0; }
    .btn-voltar {
      display: inline-block;
      margin-top: 15px;
      margin-right: 10px;
      padding: 8px 14px;
      background-color: #e2e8f0;
      color: #1e293b;
      border-radius: 4px;
    }
    .btn-voltar:hover { background-color: #cbd5e1; text-decoration: none; }
  </style>
`;

//  Rota /
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Catálogo de Heróis</title>
      ${estilosCSS}
    </head>
    <body>
      <h1>Catálogo de Heróis</h1>
      <p>Bem-vindo ao catálogo de super-heróis! Escolha uma editora ou um personagem abaixo para explorar.</p>
      
      <h2>Editoras</h2>
      <ul>
        <li><a href="/marvel">Marvel Comics</a></li>
        <li><a href="/dc">DC Comics</a></li>
      </ul>

      <hr>

      <h2>Personagens em Destaque</h2>
      <ul>
        <li><a href="/personagem/marvel/Homem-Aranha">Homem-Aranha</a></li>
        <li><a href="/personagem/marvel/Thor">Thor</a></li>
        <li><a href="/personagem/dc/Batman">Batman</a></li>
        <li><a href="/personagem/dc/Superman">Superman</a></li>
      </ul>
    </body>
    </html>
  `);
});

// Rota Empresas

// Rota /marvel
app.get('/marvel', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Marvel Comics</title>
      ${estilosCSS}
    </head>
    <body>
      <h1>Marvel Comics</h1>
      <p>A Marvel Comics é uma das maiores editoras de quadrinhos do mundo, criadora de heróis como Vingadores, X-Men e Quarteto Fantástico.</p>
      
      <h3>Personagens Disponíveis:</h3>
      <ul>
        <li><a href="/personagem/marvel/Homem-Aranha">Homem-Aranha</a></li>
        <li><a href="/personagem/marvel/Thor">Thor</a></li>
        <li><a href="/personagem/marvel/Homem-de-Ferro">Homem de Ferro</a></li>
        <li><a href="/personagem/marvel/Capitao-America">Capitão América</a></li>
      </ul>

      <a class="btn-voltar" href="/">← Voltar para a Página Inicial</a>
    </body>
    </html>
  `);
});

// Rota /dc
app.get('/dc', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>DC Comics</title>
      ${estilosCSS}
    </head>
    <body>
      <h1>DC Comics</h1>
      <p>A DC Comics é uma das mais conhecidas empresas de histórias em quadrinhos, lar de ícones como Superman, Batman e Mulher-Maravilha.</p>
      
      <h3>Personagens Disponíveis:</h3>
      <ul>
        <li><a href="/personagem/dc/Batman">Batman</a></li>
        <li><a href="/personagem/dc/Superman">Superman</a></li>
        <li><a href="/personagem/dc/Mulher-Maravilha">Mulher-Maravilha</a></li>
        <li><a href="/personagem/dc/Flash">Flash</a></li>
      </ul>

      <a class="btn-voltar" href="/">← Voltar para a Página Inicial</a>
    </body>
    </html>
  `);
});


app.get('/personagem/:empresa/:nome', (req, res) => {
  const { empresa, nome } = req.params;

  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Detalhes do Personagem</title>
      ${estilosCSS}
    </head>
    <body>
      <h1>Detalhes do Personagem</h1>
      <p><strong>Editora / Empresa:</strong> ${empresa.toUpperCase()}</p>
      <p><strong>Nome do Personagem:</strong> ${nome}</p>
      
      <br>
      <a class="btn-voltar" href="/${empresa.toLowerCase()}">← Voltar para a ${empresa}</a> 
      <a class="btn-voltar" href="/">Página Inicial</a>
    </body>
    </html>
  `);
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});