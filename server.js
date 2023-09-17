const express = require("express");
require("./app/src/config/dbConfig").getDbConnection();

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const publicRoutes = require("./app/src/routes/public.routes")

app.use("/public",publicRoutes)

app.listen(9999)
console.log("server started on 9999");
