import json from '../data.json'
export function filter() {
   
    var ide = prompt("escribe un número del 1 al 10");
    var ide2=parseInt(ide);//pasa variable ide que tiene un valor string a uno númerico
    if(ide2>=1 && ide2<=10  ){
        console.log(ide2>1 );
        console.log(ide2<=10);
        console.log(json['data'].filter(filtro => filtro['userId'] === parseInt(ide)));
        console.log(true);
    }
    else{
        ide = prompt("escribe un número del 1 al 10");
        ide2=parseInt(ide);
        if(ide2>=1 && ide2<=10){
            console.log(json['data'].filter(filtro => filtro['userId'] === parseInt(ide)));
        }
    }

    console.log(ide);
    

  }
  export function garabato(){
    var ide = prompt("escribe un número del 1 al 10");
    var ide2=parseInt(ide);//pasa variable ide que tiene un valor string a uno númerico
    if(ide2>=1 && ide2<=10  ){
        console.log(ide2>1 );
        console.log(ide2<=10);
        console.log(json['data'].filter(filtro => filtro['userId'] === parseInt(ide)));
        console.log(true);
    }
    else{
       garabato();
    }

  }
