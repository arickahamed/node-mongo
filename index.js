const express = require("express");

const rootCall = (req, res) => res.send("It seems interesting and learning how to refresh a webpage with keyboard .Now I am trying to change the port to 8000. alhamdulillah");

const app = express();

app.get("/", rootCall)


app.listen(8000, ()=>console.log("listenning to port 8000"));