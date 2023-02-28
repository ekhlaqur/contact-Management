const express = require("express");
const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
  firstName : {
    type : String,
    required : true
  },
  lastName : {
    type : String,
    required : true
  }, 
  Email : {
    type : String,
    require : true
  },
  phone : {
    type : Number,
    require : true
  }
});
const ContactManagement = new mongoose.model("ContactManagement", contactSchema);
module.exports = ContactManagement;