const mongoose=require('mongoose');
const Details=mongoose.Schema({
    brandName:String,
    brandIconUrl:String,
    links:[
            {
            label:String,
            url:String,
        },
    ],
});
// export the schema 
module.exports=mongoose.model("details",Details);