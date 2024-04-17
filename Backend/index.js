const connectToMongo = require('./db');
const express = require('express');
var cors=require('cors')
connectToMongo(); 

const app = express(); // Create Express app
const port = 5000;


app.use(cors())
app.use(express.json());//Middleware to parse json data
//Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/prescription',require('./routes/prescription'))
//app.use('/api/user',require('./routes/user'))

app.listen(port, () => {
  console.log(`telemedicine backend listening on port http://localhost:${port}`);
});
