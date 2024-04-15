import { P5Wrapper } from "./components/p5-wrapper";

function App() {
  return (
    <div>
      <img
        src="/pokemon-logo.png"
        alt="Logo Pokemon"
        height="200"
        width="556"
      />
      <a href="/searches.html">
        <button id="buttonAstar">A*</button>
      </a>
      <a href="/searches.html">
        <button id="buttonBFS">Busca em Largura</button>
      </a>
      <a href="/searches.html">
        <button id="buttonDFS">Busca em Profundidade</button>
      </a>
      <a href="/searches.html">
        <button id="buttonUCS">Busca de Custo Uniforme</button>
      </a>
      <a href="/searches.html">
        <button id="buttonGreedy">Busca gulosa</button>
      </a>
      <P5Wrapper />
    </div>
  );
}

export default App;
