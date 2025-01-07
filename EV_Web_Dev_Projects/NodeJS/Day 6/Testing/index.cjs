const express = require("express");
const path = require("path");
const fares = require("./fares.cjs");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static(path.join(__dirname, "public_static")));

app.get('/rate',(req,res)=>{
    res.send(fares.rate);
});

app.post('/CF',(req,res)=>{
    let km= parseFloat(req.body.km)
    let min= parseInt(req.body.min)

    let fare= fares.calcfare(km,min);
    res.send({fare: fare})
})


app.listen(3000, () => console.log("Server started ..."));


