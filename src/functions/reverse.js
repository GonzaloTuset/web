import json from '../data.json';
export function reversa() {
    json['data'].reverse();
    console.log(json['data']);
    //le pido a el objeto json que de vuelta todo los valores de 'data'.
  }