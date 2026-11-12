//1. Import the express library and built in function
import express from 'express'

//2. Create instance of an Express application
const app = express()


//Define the port the server will run on 
const port = 3000;

app.get('/',  (req, res) => {
    res.send("Welcome to The Daily Grind Coffee Shop API!.<br>The Server is running!")
})

// // Fun-fact route with hardcoded data 
// app.get('/api/fun-fact',  (req, res) => {
//     res.json({ fact: "Brazil grows about a third of the world's coffee." });
// });

// Fun-fact route with API data 
app.get('/api/fun-fact',async(req, res) => {
    
    //cod ethat might produce the error
    try{
        // 1. Fetch data from the external API
    const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random');


    // Check if the API request was successful
    if (!response.ok) {
    throw new Error('Failed to fetch fun fact');
}


    // 2. Convert the response into JSON
    const data = await response.json();

    // console.log(data);
    // console.log(data.text);



    // 3. Send the fact to the client
    res.json({ fact: data.text });

    }
    catch(error)
    {
        //Handle the error
        console.log(error.message)
        res.status(500).json({ error: 'Could not fetch fun fact' });
    }

    
});

//Start the server and listen on the port
app.listen(port, () => {
    console.log(`The Daily Grind server is running on port ${port}. Ready for orders!`)
})

