const express = require('express')
const routes = express.Router();

const SessionCrontroller = require('./controllers/SessionController')

const ProfileCrontroller = require('./controllers/ProfileController')

const OngCrontroller = require('./controllers/OngController')
const IncidentsController = require('./controllers/IncidentController')

routes.post('/sessions', SessionCrontroller.create)

routes.get('/ongs', OngCrontroller.index)
routes.post('/ongs', OngCrontroller.create)

routes.get('/profile', ProfileCrontroller.index)

routes.post('/incidents', IncidentsController.create)
routes.get('/incidents',IncidentsController.index)
routes.delete('/incidents/:id', IncidentsController.delete)

module.exports = routes;