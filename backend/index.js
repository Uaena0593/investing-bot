import express from 'express'
const app = express()
const PORT = process.env.PORT || 3001;

app.listen(3001,() =>{
    console.log("Listening on port 3001");
});