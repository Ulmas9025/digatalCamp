import express from "express";
import friends from "./friends.mjs";

const app = express();
const PORT = 4444;

app.get("/", (req, res) => {
  res.send(200);
});

app.use("/friend", friends);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
