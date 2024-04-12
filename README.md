# Autonomous Agents Project

This project simulates autonomous agents navigating through a grid environment, utilizing various search algorithms to find the most efficient path to a goal. It's built with TypeScript, utilizing the p5.js library for rendering the simulation on a web page.

## Getting Started

To run this project locally, follow these steps:

1. Ensure you have [Node.js](https://nodejs.org/en/) installed on your machine.
2. Clone the repository to your local machine.
3. Open a terminal in the project directory.
4. Install the project dependencies by running:
   ```bash
   npm install
   ```
5. Start the development server with:
   ```bash
   npm run dev
   ```
6. Open `index.html` in your browser to view the project.

## Project Structure

- `src/`: Contains the TypeScript source files.
  - `models/`: Definitions for the grid, agent, and food objects.
  - `scripts/`: Utility scripts, including button handlers and search name display logic.
  - `searches/`: Implementation of search algorithms (A*, BFS, DFS, Greedy, UCS).
  - `utils/`: Utility functions and constants.
  - `sketch.ts`: Main p5 sketch file that initializes and runs the simulation.
- `public/`: Static assets like images and icons.
- `style.css`: Stylesheet for the project's HTML pages.
- `index.html` and `searches.html`: HTML pages for the project.
- `vite.config.js`: Configuration file for Vite, the build tool used in this project.
- `tsconfig.json`: TypeScript compiler options.

## Key Features

- Simulation of autonomous agents in a grid environment.
- Implementation of various search algorithms for pathfinding.
- Interactive web interface to select and visualize different search strategies.

## Technologies Used

- [TypeScript](https://www.typescriptlang.org/): For writing type-safe JavaScript code.
- [p5.js](https://p5js.org/): A client-side library for creating graphic and interactive experiences.
- [Vite](https://vitejs.dev/): A modern frontend build tool.

## Contributing

Contributions to the project are welcome! Please follow the standard fork-and-pull request workflow. Make sure your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.