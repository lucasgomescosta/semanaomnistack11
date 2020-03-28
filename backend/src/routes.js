const express = require('express')
const { celebrate, Segments, Joi} = require('celebrate')

const routes = express.Router();

const SessionCrontroller = require('./controllers/SessionController')

const ProfileCrontroller = require('./controllers/ProfileController')

const OngCrontroller = require('./controllers/OngController')
const IncidentsController = require('./controllers/IncidentController')

routes.post('/sessions', SessionCrontroller.create)

routes.get('/ongs', OngCrontroller.index)
routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
  })
}) ,OngCrontroller.create)

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}),ProfileCrontroller.index)

routes.post('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  }),
}),IncidentsController.create)
routes.get('/incidents',IncidentsController.index)
routes.delete('/incidents/:id',celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  }),
}) ,IncidentsController.delete)

module.exports = routes;