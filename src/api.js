const fetch = require('node-fetch');

const url = "https://jsonplaceholder.typicode.com/users";


// fetch(url).then(res => res.json()).then(json => console.log(json));

fetch(url).then((apidata) => apidata.json()).then((actualdata) =>{
    console.log(actualdata);
})
