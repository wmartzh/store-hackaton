const express = require('express');
const router = require('./router');
const PORT = 8000;
const HOST = 'localhost'


const app = express();
app.use(express.json());
app.use('/',router);


app.listen(PORT,HOST,()=>{
  console.log(`Server listening at ${HOST}:${PORT}`)

})