

let paragraphCatch =  document.querySelector('.paragraph');
paragraphCatch.innerHTML ='We have Liftoff!!!!!';

const request = require('request');

// axios.get('http://localhost:3000/nasa')
//   .then(response => {
//     console.log(response);
//   })

request('http://localhost:3000/nasa', { json: true }, (err, res, data) => {
  if (err) { return console.log(err); }
  console.log(data.url);
  console.log(data.explanation);
});