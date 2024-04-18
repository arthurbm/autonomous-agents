import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-yellow-400">
      <div className="container grid gap-4 px-4 text-center md:px-6">
        <div className="flex items-center flex-col space-y-3">
          <img
            src="/pokemon-logo.png"
            alt="Pokemon Logo"
            width={556}
            height={200}
          />
          <p className="mx-auto max-w-[800px] text-secondary-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Explore search algorithms in the Pokémon world. Choose an algorithm to visualize it!
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-4 lg:gap-6">
          <Link to="/search/astar">
            <Button className="w-full">A*</Button>
          </Link>
          <Link to="/search/bfs">
            <Button className="w-full">Breadth first search</Button>
          </Link>
          <Link to="/search/dfs">
            <Button className="w-full">Depth-first search</Button>
          </Link>
          <Link to="/search/ucs">
            <Button className="w-full">Uniform cost search</Button>
          </Link>
          <Link to="/search/greedy">
            <Button className="w-full">Greedy search</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
