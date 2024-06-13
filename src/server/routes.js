const postPredictHandler = require('../server/handler');
const Joi = require('joi');

const routes = [
  {
    path: '/predict',
    method: 'POST',
    handler: postPredictHandler,
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: true,
      },
      validate: {
        payload: Joi.object({
          userId: Joi.number().integer().required(),
          gender: Joi.string().required(),
        }),
      },
    },
  },
];

module.exports = routes;
