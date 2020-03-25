const express = require('express');
const cors = require('cors');
const routes = require('./routes');
// Iniciando uma aplicação em express
const app = express();

// Para fazer o controle de quem poderá acessar a nossa aplicação
// Desta forma, todas aplicações frontend poderão acessar o backend
app.use(cors());
// Quando estiver em produção
// app.use(cors({
//     origin: 'http://meuapp.com'
// }));

// Para informar que as requisições serão feitas no formato JSON 
// Para converter o corpo da requisição em JSON em um objeto do Javascript
app.use(express.json());
app.use(routes);

// Informando que esta aplicação utilizará a porta '3333'
app.listen(3333);