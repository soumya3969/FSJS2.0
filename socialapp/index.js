// *1.Bring Express
// *2.Assign Express
// *3.PORT(Excuted)
// *4.Listen
// *5.Route
    // ?Middleware
    // ?models
    // ?database

// *Bring Express
const express = require('express');
// *Assign Express
const app = express();
// *PORT
const PORT = 3000;
        // !Procee.env.Port
// *LISTEN
app.listen(PORT,() =>{
    console.log("Server listening on "+PORT);
})



