import logo from './logo.svg';
import './App.css';
import json from './data.json';
//importo la informacion que tenga a el archivo a especificar a un objeto

function App() {
  function show(){
    console.log("buenas");
    console.log(json);
    
  }
  function reversa(){
    json['data'].reverse();
    console.log(json['data']);
    //le pido a el objeto json que de vuelta todo los valores de 'data'.
  }
    function par(){
      //priero filtrar
     console.log(json['data'].filter(objeto /*se crea un parametro que alamcena todo que haya en el array y es lo que luego recibe el filtro*/ => objeto["id"] %2 === /*estrictamente parecido*/ 0 /*hace la operacion logica */ ));
      //filtrar por id par             /*se crea un parametro que alamcena todo que haya en el array y es lo que luego recibe el filtro*/
      console.log(json['data'].filter(
        (objeto)=>{
          
          return  objeto["id"] %2 === 0
        }));
 
  }
function filter(){
  var ide= prompt ("escribe un muero del 1 al 10");
  console.log(ide);
    console.log(json['data'].filter(filtro => filtro['userId'] == ide ));
    
    

  }
  console.log(0,1*0,1);
  
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          <button name="button" onClick={show}>mostrar toda la info</button>
          <button name="button" onClick={reversa}>reversa</button>
          <button name="button" onClick={par}>filtra por id par</button>
          <button name="button" onClick={filter}>filtra por id de usuario</button>{/*VA A RECIBIR UN NUMERO Y VA A FILTRAR POR ESE NUMERO*/}
          
        </p>
       
    
      </header>
    </div>
  );
}

export default App;
