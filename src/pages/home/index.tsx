import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="container grid gap-4 px-4 text-center md:px-6">
        <div className="flex items-center flex-col space-y-3">
          <img
            src="/pokemon-logo.png"
            alt="Pokemon Logo"
            width={556}
            height={200}
          />
          <p className="mx-auto max-w-[600px] text-secondary-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Explore multiple search algorithms with the help of Pokemon.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 md:grid-cols-3 md:gap-4 lg:gap-6">
          {/* <Link href="/search/astar">
            <Button className="w-full">A*</Button>
          </Link>
          <Button>Busca em Largura</Button>
          <Button>Busca em Profundidade</Button>
          <Button>Busca de Custo Uniforme</Button>
          <Button>Busca gulosa</Button> */}
        </div>
      </div>
    </main>
  );
}
