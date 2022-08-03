import logo from './logo.svg';
import './App.css';
import json from './data.json';
import{reversa}from'./functions/reverse';
import{filter}from'./functions/filtroId';
import{par}from'./functions/par';
import{show}from'./functions/show';
//importo la informacion que tenga a el archivo a especificar a un objeto

function App() {  
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
