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

app.get("/insta",(req,res) =>{
    // res.status(200).send("Hello Fsjs web developer!"); 
    const insta ={
        userName: "soumya",
        follow: 1,
        followers: 20,
    };
    res.status(200).json({insta}); //! we can use json instead of send
});
app.get("/linked",(req,res) =>{
    const linked = {
        userName: "soumya",
        connects: 159,
        followers: 20,
    };
    res.status(200).json({linked}); 
});
app.get("/twitter",(req,res) =>{
    const twitter ={
        userName: "soumya",
        followers: 20,
        following:15
    }
    res.status(200).json({twitter}); 
});

// *LISTEN
app.listen(PORT,() =>{
    console.log("Server Running");
});



