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

// *Route
app.get("/", (req, res) =>{
    res.send("<center><h1>Hello Fsjs 2.0</h1></center>"); //!res.send used to display on web page
});

// *LISTEN
app.listen(PORT,() =>{
    console.log("Server Running");
});



