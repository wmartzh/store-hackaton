const {createClientModel} = require('./models') 
const clientService =require('./clientsService')
 const create = async (request, response) =>{
  try {
    const body = await createClientModel.validateAsync(request.body)
    const result = await clientService.createClient(body)

    response.json(result)
    

  } catch (error) {
    console.log('🚀 => create => error', error);
    if( error.details != null){
      let validationsError = error.details.map((err)=>{
        return {
          "validationError": err.context.label,
          message: err.message,
        }
      })
      response.status(400).json(validationsError);
    }
  }
}

module.exports = {
  create,
}