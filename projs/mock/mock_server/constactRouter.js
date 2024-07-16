import express from "express";

const routuer = express.Router();
let data = {
  fullname: {
    name: "Anar",
    surname: "Soltanzada",
  },
  phone: "+994707090709",
  gender: "male",
  priority: "medium",
  texts: ["Hello Anar"],
};

routuer.get("/", (req, res) => {
  // console.log("getttttttttttttttttttttttt");
  console.log("------------get", res.json(data));
  res.json(data);
  res.send("elacisan");
});

routuer.post("/", (req, res) => {
  // console.log("----REQ-BODY----", req.body);
  data = req.body;
  res.status(201).json(data);
});

routuer.delete("/:id", (req, res) => {
  const { id } = req.params; // req.paramsdan bu idni aliriq
  // data.texts = data.texts.filter((item, index) => index !== Number(id));
  data = {
    ...data,

    texts: data.texts.filter((item, index) => index !== Number(id)),
  };
  res.status(200).send();
  console.log("---ID----DATA------", id, data);
});

export default routuer