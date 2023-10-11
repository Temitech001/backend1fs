// const fs = require('fs');
// const fs = require('fs');

// const hello = 'Hello world';
// console.log(hello);
// fs.readFile('./txt/input.txt', (err, data) => {
//   console.log(data.toString());
// });
const fs = require('fs');

// const hello = 'cxyjlxyilxylou;oci;ciououolui;icp;xi;o.o';

// fs.writeFile('output.txt', hello, 'utf-8', (err) => {
//   if (err) throw err;
//   console.log('File Written');
// });

//writing asymchronously non blocking
fs.readFile('./txt/start.txt', (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, `utf-8`, (err, data2) => {
    fs.readFile(`./txt/append.txt`, `utf-8`, (err, data3) => {
      console.log(data3);
      fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', (err) => {
        console.log('your file has been written');
      });
    });
    console.log(data2);
  });
});
