import express from "express";
import path from "path";

const router = express.Router();
const __dirname = path.resolve();

router.get("/akobir", (req, res) => {
  res.sendFile(__dirname + "/friends/akobir.html");
});
router.get("/jamshod", (req, res) => {
  res.sendFile(__dirname + "/friends/jamshod.html");
});

export default router;
