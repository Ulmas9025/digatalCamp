import express from "express";
import bodyParser from "body-parser";
import path from "path";


//const __filename = fileURLToPath(import.meta.url);
const __dirname = path.resolve() ;

const app = express();
const port = 9000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));

let registeredUser = {};
let UserName = {};

app.get("/register", (req, res)=>{
  res.sendFile(path.join(__dirname, "public" , "register.html"));
});

app.post("/register", (req ,  res) =>{
  const {name , surname , email, password} = req.body;
  registeredUser[email] = password;
  UserName[name] = surname;
  res.redirect(`\login?email=${email}&password=${password}`);
  res.redirect(`\welcome?name=${name}&surname=${surname}`)
});

app.get("/login", (req, res)=>{
  const{email,password,name,surname} = req.body;
  res.sendFile(path.join(__dirname, "public" , "login.html"));
});

app.post("/login", (req ,  res) =>{
  const {email, password} = req.body;
  if( registeredUser[email] === password){
    res.redirect(`\welcome?email=${email}&password=${password}`)
  }else{
    res.semd("Invalid credentials. Please try again.")
  }
  if( UserName[name] === surname){
    res.redirect(`\welcome?name=${name}&surname=${surname}`)
  }else{
    res.semd("Invalid credentials. Please try again.")
  }
})

app.get("/welcome" , (req,res) =>{
  const {name , surname} = req.body;
  res.send(`<h2>Welcome, ${name}  ${surname}</h2>`)
});

app.listen(port, () =>{
  console.log(`Server is running on http://localhost:${port}`);
});

