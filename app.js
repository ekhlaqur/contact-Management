const express = require("express");
require("./contact-Management/conn");
const ContactManagement=require("./contact-Management/contactschema")
const app = express();
const port = process.PORT || 3000;
app.use(express.json());
app.post("/contactschema", async(req, res) =>{
    try{
        const addingContactRecords = new ContactManagement(req.body);
        console.log(req.body);
       const insertConatact = await addingContactRecords.save();
       res.status(201).send(insertConatact);

    }catch(e){
        res.status(400).send(e);
    }
})
app.get("/contactschema", async(req, res) =>{
    try{
     const getContact = await ContactManagement.find({})
       res.send(getContact);

    }catch(e){
        res.status(400).send(e);
    }
})
app.get("/contactschema/:id", async(req, res) =>{
    try{
        const _id = req.params.id;
     const getContacts = await ContactManagement.findById({_id});
       res.send(getContacts);

    }catch(e){
        res.status(400).send(e);
    }
})
app.patch("/contactschema/:id", async(req, res) =>{
    try{
        const _id = req.params.id;
     const getContacts = await ContactManagement.findByIdAndUpdate(_id, req.body, {
        new : true
     });
       res.send(getContacts);

    }catch(e){
        res.status(500).send(e);
    }
})
app.delete("/contactschema/:id", async(req, res) =>{
    try{
     const getContacts = await ContactManagement.findByIdAndDelete(req.params.id);
       res.send(getContacts);

    }catch(e){
        res.status(500).send(e);
    }
})
app.listen(port, () =>{
    console.log(`connection established ${port}`)
})