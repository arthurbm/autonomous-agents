// make script to add search name as a h1 to the page, getting the name from local storage

import { SelectedSearch } from "./handleButtons";

const selectedSearchNameMap = {
  buttonAstar: 'A*',
  buttonGreedy: 'Greedy',
  buttonUCS: 'UCS',
  buttonBFS: 'BFS',
  buttonDFS: 'DFS',
  none: 'None',
}

// get the name from local storage
const selectedSearch: SelectedSearch = localStorage.getItem('SELECTED_SEARCH') as SelectedSearch || 'none';

// create a new h1 element
const h1 = document.createElement('h1');

// set the text of the h1 to the name
h1.innerText = selectedSearchNameMap[selectedSearch];

// append the h1 to the body
document.body.appendChild(h1);

