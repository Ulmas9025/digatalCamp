import { log } from 'console';
import express from 'express';
import bp from 'body-parser';

const app = express();
const port = 7777;
const db=[];

app.use(bp.json())

app.get('/getAllTodos',(req,res)=>{
   res.json(db);
   //res.header('Content-Type', 'application/json')
   
})

app.post('/newTodo',(req,res)=>{
    db.push(req.body);
    res.send('Successfully created'); 
});

app.listen(port , () =>{
    console.log(`App id lidtening on ${port}`);
});





// app.use(bp.urlencoded({extended:true}));




// app.post('/todo', (req,res) =>{
//     const newTodo = {
//         id: Date.now(),
//         text:req.body.text
//     }

//     db.push(newTodo)
//     res.json(newTodo)
// })