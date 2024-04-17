import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div>
      <img
        src="/pokemon-logo.png"
        alt="Logo Pokemon"
        height="200"
        width="556"
      />
      <Link to="/search/astar">
        <button>A*</button>
      </Link>
      <Link to="/search/bfs">
        <button>Busca em Largura</button>
      </Link>
      <Link to="/search/dfs">
        <button>Busca em Profundidade</button>
      </Link>
      <Link to="/search/ucs">
        <button>Busca de Custo Uniforme</button>
      </Link>
      <Link to="/search/greedy">
        <button>Busca gulosa</button>
      </Link>
    </div>
  );
}
