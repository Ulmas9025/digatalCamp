import express from 'express';
import fs from 'fs';
import path from 'path';
import crClient from "./crClent.mjs";

const app = express();
const PORT = 5555;



app.get("/", (req, res) => {
    res.send(200);
  });
  
  app.use("/public", crClient);

fs.readFile('./client.json', 'utf-8',(err, jsonString)=>{
  if(err){
    console.log(err);
  }else{
    try{
      const data =JSON.parse(jsonString)
      console.log(data);
    }catch{
      console.log('Error parsing JSON' , err);
    }
  }
})





app.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} portida ishga tushdi`);
});