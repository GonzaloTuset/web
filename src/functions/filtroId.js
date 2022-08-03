import json from '../data.json'
export function filter() {
    var ide = prompt("escribe un número del 1 al 10");
    console.log(ide);
    console.log(json['data'].filter(filtro => filtro['userId'] === parseInt(ide)));

  }
