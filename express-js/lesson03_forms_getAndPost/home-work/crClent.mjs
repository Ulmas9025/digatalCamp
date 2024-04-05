import express from "express";
import path from "path";

const router = express.Router();
const __dirname = path.resolve();

router.get("/index", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
router.get("/registor", (req, res) => {
  res.sendFile(__dirname + "/public/registor.html");
});

export default router;