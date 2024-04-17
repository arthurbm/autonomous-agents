export type NonUndefined<T> = T extends undefined ? never : T;

export type SelectedSearch = 'astar' | 'greedy' | 'ucs' | 'bfs' | 'dfs';

export const selectedSearchNameMap = {
  buttonAstar: 'A*',
  buttonGreedy: 'Greedy',
  buttonUCS: 'UCS',
  buttonBFS: 'BFS',
  buttonDFS: 'DFS',
  none: 'None',
}