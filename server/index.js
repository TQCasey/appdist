

import Express  from "express";
const app = Express ();

const port = 4000;

app.get ('/list',(req,res) => {

    res.json ({
        ret : 1,
        msg : "OK"
    })

})

app.listen (port,() => {
    console.log (`Server is running at localhost:${port}`)
})
