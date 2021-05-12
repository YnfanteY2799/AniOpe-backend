const express = require('express');

const app = express();

app.set("PORT", process.env.PORT || 4090);

app.get("/api", (req, res) => {

    console.log("Called Api");

    res.json({ message: "Hello from server!" });
  });

app.get("/api/random", (req,res)=>{

    let numb = Math.random() * 50;
    res.json(numb);

});

app.listen(app.get("PORT"), () =>{
    console.log(`API running at: localhost:${app.get("PORT")}`);
});