import express from "express";
import cors from "cors";
import contactRouter from "./constactRouter.js"

const port = 3001;
const app = express();

app.use(cors());
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))

app.use("/", contactRouter)


app.use(express.json());

app.listen(port, () => {
  console.log("Example on port");
});

// let data = {
//   fullname: {
//     name: "Anar",
//     surname: "Soltanzada",
//   },
//   phone: "+994707090709",
//   gender: "male",
//   priority: "medium",
//   texts: ["Hello Anar"],
// };

// app.get("/", (req, res) => {
//   // console.log("getttttttttttttttttttttttt");
//   console.log("------------get",res.json(data))
//   res.json(data);
//   res.send("elacisan")
// });

// app.post("/", (req, res) => {
//   // console.log("----REQ-BODY----", req.body);
//   data = req.body;
//   res.status(201).json(data);
// });

// app.delete("/:id", (req, res) => {
//   const { id } = req.params;  // req.paramsdan bu idni aliriq
//   // data.texts = data.texts.filter((item, index) => index !== Number(id));
//   data ={...data,
    
//     texts:data.texts.filter((item, index) => index !== Number(id))};
//   res.status(200).send();
// console.log("---ID----DATA------",id,data);
// });

// import expres from "express";
// import cors from "cors";

// const app = expres();
// const port = 3001;

// app.use(expres.json());

// app.use(cors());

// let data = {
//   fullname: {
//     name: "Anar",
//     surname: "Soltan",
//   },
//   phone: "+994709952969",
//   gender: "male",
//   priority: "low",
//   texts: ["salam necesen?", "YAXSIYAM"],
// };

// app.get("/", (req, res) => {
//   res.json(data);
// });

// app.post("/", (req, res) => {
//   data = req.body;
//   res.status(201).json(data);
// });

// app.delete("/:id",(req,res)=>{
//     console.log(req.params);
// })

// app.listen(port, () => {
//   console.log(`Exaple on port ${port}`);
// });

// // import express from "express";
// const app = express();
// const port = 3002;
// app.get("/", (req, res) => {
//   // res.send("salam")
//   res.json({
//     fullname: {
//       name: "Anar",
//       surname: "Soltan",
//     },
//     phone: "+994709952969",
//     gender: "male",
//     priority: "low",
//     texts: ["salam necesen?"],
//   });
// });
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
