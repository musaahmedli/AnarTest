import express from "express";
import cors from "cors";
const app = express();
app.use(cors());

const port = 4001;

app.listen(port, () => {
  console.log(`exaple App listening on port ${port}`);
});

app.use(express.json());
// 140g butter, softened, plus extra for the tin.
// 140g caster sugar.
// 2 large eggs, beaten.
// 140g self-raising flour.
// 1 tsp baking powder.
// 2 very ripe bananas, mashed.
// 50g icing sugar.
// handful dried banana chips, for decoration.
let data = [
  {
    id: 1,
    title: "test1",
    content: "Banana",
    description:
      "140g butter, softened, plus extra for the tin.\n140g caster sugar.\n2 large eggs, beaten.\n140g self-raising flour.\n1 tsp baking powder.\n2 very ripe bananas, mashed.\n 50g icing sugar.\nhandful dried banana chips, for decoration.",
  },
  {
    id: 2,
    title: "test2",
    content: "Apple",
    description:
      "140g butter, softened, plus extra for the tin.\n140g caster sugar.\n2 large eggs, beaten.\n140g self-raising flour.\n1 tsp baking powder.\n2 very ripe bananas, mashed.\n 50g icing sugar.\nhandful dried banana chips, for decoration.",
  },
  {
    id: 3,
    title: "test3",
    content: "Cherry",
    description:
      "140g butter, softened, plus extra for the tin.\n140g caster sugar.\n2 large eggs, beaten.\n140g self-raising flour.\n1 tsp baking powder.\n2 very ripe bananas, mashed.\n 50g icing sugar.\nhandful dried banana chips, for decoration.",
  },
  {
    id: 4,
    title: "test4",
    content: "Pineapple",
    description:
      "140g butter, softened, plus extra for the tin.\n140g caster sugar.\n2 large eggs, beaten.\n140g self-raising flour.\n1 tsp baking powder.\n2 very ripe bananas, mashed.\n 50g icing sugar.\nhandful dried banana chips, for decoration.",
  },
  {
    id: 5,
    title: "test5",
    content: "watermelon",
    description:
      "140g butter, softened, plus extra for the tin.\n140g caster sugar.\n2 large eggs, beaten.\n140g self-raising flour.\n1 tsp baking powder.\n2 very ripe bananas, mashed.\n 50g icing sugar.\nhandful dried banana chips, for decoration.",
  },
  {
    id: 6,
    title: "test6",
    content: "melon",
    description:
      "140g butter, softened, plus extra for the tin.\n140g caster sugar.\n2 large eggs, beaten.\n140g self-raising flour.\n1 tsp baking powder.\n2 very ripe bananas, mashed.\n 50g icing sugar.\nhandful dried banana chips, for decoration.",
  },
  {
    id: 7,
    title: "test7",
    content: "kivi",
    description:
      "140g butter, softened, plus extra for the tin.\n140g caster sugar.\n2 large eggs, beaten.\n140g self-raising flour.\n1 tsp baking powder.\n2 very ripe bananas, mashed.\n 50g icing sugar.\nhandful dried banana chips, for decoration.",
  },
  {
    id: 8,
    title: "test8",
    content: "pear",
    description:
      "140g butter, softened, plus extra for the tin.\n140g caster sugar.\n2 large eggs, beaten.\n140g self-raising flour.\n1 tsp baking powder.\n2 very ripe bananas, mashed.\n 50g icing sugar.\nhandful dried banana chips, for decoration.",
  },
  {
    id: 9,
    title: "test9",
    content: "quince",
    description:
      "140g butter, softened, plus extra for the tin.\n140g caster sugar.\n2 large eggs, beaten.\n140g self-raising flour.\n1 tsp baking powder.\n2 very ripe bananas, mashed.\n 50g icing sugar.\nhandful dried banana chips, for decoration.",
  },
];
app.get("/", (req, res) => {
  // console.log("getttttttttttttttttttttttt");
  console.log("------------get", res.json(data));
  res.json(data);
  res.send("elacisan");
});
