const express = require("express");
const hbs = require("hbs");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); // are used to post method

const routes = require("./routes/main");

const Details = require("./models/Details"); //import the details model
const Slider = require("./models/Slider"); //import the details model
const Service = require("./models/Service"); //import the details model

const hostname = "127.0.0.1";
const port = 5656;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/static", express.static("public"));
app.use("", routes);

// use template eingine
app.set("view engine", "hbs");
app.set("views", "views");

hbs.registerPartials("views/partials");

// db connection
mongoose
  .connect("mongodb://localhost:27017/DynamicWeb")
  .then(() => {
    console.log("connection successful");
    
    // creating database of services
    // Service.create([
    //   {
    //     title: "Provide Front-End Services",
    //     description:
    //       "Front-end services are an essential part of web development that focus on the user interface and user experience. They are responsible for creating the visual elements of a website that users interact with.",
    //     linkText: "Check",
    //     link: "http://www.goole.com",
    //   },
    //   {
    //     title: "Provide Front-End Services",
    //     description:
    //       "Front-end services are an essential part of web development that focus on the user interface and user experience. They are responsible for creating the visual elements of a website that users interact with.",
    //     linkText: "Check",
    //     link: "http://www.goole.com",
    //   },
    //   {
    //     title: "Provide Front-End Services",
    //     description:
    //       "Front-end services are an essential part of web development that focus on the user interface and user experience. They are responsible for creating the visual elements of a website that users interact with.",
    //     linkText: "Check",
    //     link: "http://www.goole.com",
    //   },
    //   {
    //     title: "Provide Front-End Services",
    //     description:
    //       "Front-end services are an essential part of web development that focus on the user interface and user experience. They are responsible for creating the visual elements of a website that users interact with.",
    //     linkText: "Check",
    //     link: "http://www.goole.com",
    //   },
    //   {
    //     title: "Provide Front-End Services",
    //     description:
    //       "Front-end services are an essential part of web development that focus on the user interface and user experience. They are responsible for creating the visual elements of a website that users interact with.",
    //     linkText: "Check",
    //     link: "http://www.goole.com",
    //   }
    // ]);

    // creating database of slider
    // Slider.create([
    //   {
    //     title:"Learn Full-Stack using Java ",
    //     subTitle:"Full-stack is complete technology of frontend and backend by using of different library  like spring boot , django express js and other web supported programming languages. ",
    //     imageUrl:"/static/images/dev.webp"
    //   },
    //   {
    //     title:"Learn Full-Stack in using django",
    //     subTitle:"Full-stack is complete technology of frontend and backend by using of different library  like spring boot , django express js and other web supported programming languages. ",
    //     imageUrl:"/static/images/dev2.jpg"
    //   },
    //   {
    //     title:"Learn Full-Stack using NodeJS and expressJS",
    //     subTitle:"Full-stack is complete technology of frontend and backend by using of different library  like spring boot , django express js and other web supported programming languages. ",
    //     imageUrl:"/static/images/htmlDev.jpg"
    //   },
    //   {
    //     title:"Learn Full-Stack using PHP",
    //     subTitle:"Full-stack is complete technology of frontend and backend by using of different library  like spring boot , django express js and other web supported programming languages. ",
    //     imageUrl:"/static/images/htmlDev.jpg"
    //   }
    // ]);

    // ceating data in the database using object
    // Details.create({
    //   brandName:"LOGO",
    //   brandIconUrl:"https://th.bing.com/th?id=OIP.a0dzgjRg9yX9QUog_IsCnAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    // links:[
    //   {
    //     label:"Home",
    //     url:"/"
    //   },
    //   {
    //     label:"Services",
    //     url:"/services"
    //   },
    //   {
    //     label:"Gallery",
    //     url:"/gallery"
    //   },
    //   {
    //     label:"About",
    //     url:"/about"
    //   },
    //   {
    //     label:"Contact Us",
    //     url:"/contact-us"
    //   },
    // ]
    // })
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(process.env.PORT | port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
