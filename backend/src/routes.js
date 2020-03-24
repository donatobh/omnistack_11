const express = require('express');

const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Recuperar informações do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar informações no back-end
  * DELETE: Deletar informações no back-end
  * 
  */

  /**
   * tipos de parâmetros:
   * 
   * Query Params: Parâmetros nomeados e enviados na rota após '?' (Filtros, Paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição. Utilizado para criar ou alterar recursos
   * 
   */

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;