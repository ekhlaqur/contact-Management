const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/contactmanagement").then(() =>{
    console.log("connection established");
}
).catch((e) =>{
    console.log("no connection")
})
