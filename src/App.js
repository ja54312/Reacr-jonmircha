import logo from './logo.svg';
import './App.css';
import Componente from "./components/Componente";
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import Eventos from './components/Eventos';
import {EventosES7, MasSobreEventos} from './components/EventosES7';
import ComunicacionComponentes from './components/ComunicacionComponentes';
import CicloVida from './components/CilcloVida';
import AjaxApis from './components/AjaxApis';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> y save to reload =).
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </section>
      <section>
        <Componente msg="Hola soy un componente funcional expresado desde props"/>
        <hr/>
        <Propiedades
          cadena="Esto es una cadena de texto"
          numero={19}
          booleano={true}
          arreglo={[1,2,3]}
          objeto={{nombre:"jose",apellido:"antonio"}}
          funcion={num => num*num}
          elementoReact={<i>Esto es un elemento React</i>}
          componenteReact={<Componente msg="Soy un componente pasado como Props"/>}
        />
        <hr/>
        <Estado/>
        <hr/>
        <RenderizadoCondicional/>
        <hr/>
        <RenderizadoElementos/>
        <hr/>
        <Eventos/>
        <hr/>
        <EventosES7/>
        <hr/>
        <MasSobreEventos/>
        <hr/>
        <ComunicacionComponentes/>
        <hr/>
        <CicloVida/>
        <hr/>
        <AjaxApis/>
      </section>
      </header>
    </div>
  );
}

export default App;
