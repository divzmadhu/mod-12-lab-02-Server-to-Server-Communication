//1. Import the express library and built in function
import express from 'express'

//2. Create instance of an Express application
const app = express()


//Define the port the server will run on 
const port = 3000;

app.get('/',(req,res)=> {
    res.send("Welcome to The Daily Grind Coffee Shop API!.<br>The Server is running!")
})

// Fun-fact route with hardcoded data 
app.get('/api/fun-fact', (req, res) => {
    res.json({ fact: "Brazil grows about a third of the world's coffee." });
});

//Start the server and listen on the port
app.listen(port,() =>{
    console.log(`The Daily Grind server is running on port ${port}. Ready for orders!`)
})

