import fs from 'fs';
import path from 'path';

// let template = await fs.readFile('./template.html' , 'utf-8', (err,data) =>{
//     console.log(data);
// })

let template = await fs.promises.readFile(new URL('template.html', import.meta.url),'utf-8')

template = template.replace(`{Myname}`, 'Inoyatov Javohir');
template = template.replace(`{AvtoSayt}`, 'WepPayAuto');

fs.promises.writeFile(new URL('index.html' , import.meta.url), template);

console.log(template);