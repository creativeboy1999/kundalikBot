const { readFile } = require('fs');

readFile('./secret.env', 'utf8',(err, data) => {
  if (err) throw err
  return console.log(data.toString().slice(12))
})