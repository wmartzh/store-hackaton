const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()


const createClient = async (params) =>{
    try {
     
      const newClient = await prisma.clients.create({data:params})
      return newClient
    } catch (error) {
      console.log('🚀 => createClient => error', error);
      throw error
    }
}


module.exports = {
  createClient
}