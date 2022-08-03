import json from '../data.json';
export function par() {
    //priero filtrar
    console.log(json['data'].filter(objeto /*se crea un parametro que alamcena todo que haya en el array y es lo que luego recibe el filtro*/ => objeto["id"] % 2 === /*estrictamente parecido*/ 0 /*hace la operacion logica */));
    //filtrar por id par             /*se crea un parametro que alamcena todo que haya en el array y es lo que luego recibe el filtro*/
    console.log(json['data'].filter(
      (objeto) => {

        return objeto["id"] % 2 === 0
      }));

  }
