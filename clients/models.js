const joi = require('joi')
const createClientModel = joi.object({
  name: joi.string().required(),
  lastName: joi.string().required(),
  email: joi.string().required(),
  address: joi.string().required(),
  country: joi.string().required()
})

module.exports = {
  createClientModel
}