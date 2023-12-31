const express=require('express');
const {route}=require('express/lib/application')
const Details=require('../models/Details');//import the details models in routes
const Contact=require('../models/Contact');//import the details models in routes
const Slider=require('../models/Slider');//import the details models in routes
const Service=require('../models/Service');//import the details models in routes
const routes=express.Router();

routes.get("/", async (req,resp)=>{
  const details=  await Details.findOne({"_id":"658d239aa0b7f131f73359b1"})
  const slider= await Slider.find();
  const services= await Service.find();
  

  resp.render("index",{
    details:details,
    slider:slider,
    services:services
  })
});
routes.get("/gallery", async (req,resp)=>{
  const details=  await Details.findOne({"_id":"658d239aa0b7f131f73359b1"})

    resp.render("gallery",{
        details:details
    });
});

// process contact form 
routes.post("/process-contact", async (req,resp)=>{
  try{
    const data= await Contact.create(req.body);
    console.log(data);
    resp.redirect("/");
  }catch(e){
    console.log(e);
    resp.redirect("/");
  }
});
module.exports=routes;