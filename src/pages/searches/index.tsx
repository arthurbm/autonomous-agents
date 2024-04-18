import { useParams } from "react-router-dom";
import { P5Wrapper } from "../../components/p5-wrapper";
import { SelectedSearch } from "../../utils/types";

export function SearchPage() {
  // get :name from the URL
  const { name } = useParams<{ name: SelectedSearch }>();

  const nameMap = {
    astar: "A*",
    bfs: "Breadth first search",
    dfs: "Depth first search",
    ucs: "Uniform cost search",
    greedy: "Greedy search",
  };

  // get the name from the map
  const searchName = name ? nameMap[name] : "";

  return (
    <div className="flex flex-col items-center pt-5 pl-5 bg-yellow-400 min-h-screen">
      <h1 className="text-2xl/relaxed">Search: {searchName}</h1>

      {name && <P5Wrapper search={name} />}
    </div>
  );
}
