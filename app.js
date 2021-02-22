const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');


app.get('/nasa', async (req, res) => {
    let nasa = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
    // res.send(nasa.data.message)
    console.log(nasa.data);
    res.send(nasa.data);
  })



app.listen(port, () => {
    console.log(`I am alive listening at http://localhost:${port}`);
})
