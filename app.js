const express = require('express');
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

const CategoriesRouter = require('./routes/categories')
const morgan = require('morgan')

dotenv.config();

//middleware
app.use(express.json())
// app.use((req, res, next) => {
//     req.requestTime = new Date().toISOString()
//     next()
// })
app.use(morgan("dev"))
app.use(cors())
//server

app.use('/api/v1/categories', CategoriesRouter)


const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`server berjalan diport ${port}`)
})

