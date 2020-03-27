const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

 

app.listen(3333);


/**
 * 
 * Rota / Recurso
 * 
 * 
 */
/**
 * Metodos http:
 * 
 * get: Buscar uma informação do back-end
 * post: Criar uma informação no back-end
 * put: Alterar uma informação do back-end
 * delete: Deletar uma informação no back-end
 * 
 * */
/**
 * Tipos de parametros
 * 
 * Query:
 *  * parametros nomeado enviados na rota apos(filtors paginação)
 * Route Params: Parâmetros utilizados para identificar recursos 
 * Request Body: corpo da requisição, utilizado para criar ou alterar recursos.
 * 
 **/