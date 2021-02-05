require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth")

//DB connection
mongoose
    .connect (process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true, 
        useCreateIndex: true
    })
    .then (() => {console.log("DB connected");
                 }
          );

//Middlewares          
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My routes
// app.use("/api", app.routes);
// routes.initialize(app);

// app.use(app.router);
// routes.initialize(app);

//Port
const port = process.env.PORT || 8000;


//Starting the server
app.listen(port, () => {console.log (`app is running at ${port}`); 
                        });