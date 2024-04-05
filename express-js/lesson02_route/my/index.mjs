import path from 'path';
import express from 'express';
import data from './fr.json' assert { type: 'json' };

const PORT = 3000;
const app = express();

   app.get('/', (req, res) =>{
    res.send('<h1>Hello World</h1>')
 });

// Statik fayllar uchun middleware
app.use(express.static('public'));

// Dostlar ro'yxati uchun marshrut
app.get('/:ism', (req, res) => {
    // URL parametrlarini olish
    const { ism } = req.params;
    // Dost ma'lumotlarini izlash
    const frend = data[ism];
    // Agar dost topilmasa 404 xatolik qaytariladi
    if (!frend) {
        return res.status(404).send('Dost topilmadi');
    }
    // Dost ma'lumotlarini HTML fayliga jo'natish
    res.sendFile(path.join(__dirname, 'public', './students/freand.html'))
});

app.listen(PORT, (err) => {
    if (err) throw err
    console.log(`Server listening on http://localhost:${PORT}`);
});



























// const __dirname = path.resolve();
//  app.all('/user/*',(req, res,next)=>{
//     console.log('This is all request');
//     next();
// });
// app.get('/student/*/dashbord', (req, res ) =>{
//     res.sendFile(__dirname + './students/abbos.html' )
// });
// app.post('/all', (req, res) =>{
//     res.send('<h1>Hello World</h1>')
// });


