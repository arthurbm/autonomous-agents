export type SelectedSearch = 'buttonAstar' | 'buttonGreedy' | 'buttonUCS' | 'buttonBFS' | 'buttonDFS' | 'none';

export function handleButtonClick(button: SelectedSearch) {
  localStorage.setItem("SELECTED_SEARCH", button);
}

window.onload = () => {
  // Get a reference to the buttons on the screen
  const buttonAstar = document.getElementById('buttonAstar');
  const buttonGreedy = document.getElementById('buttonGreedy');
  const buttonUCS = document.getElementById('buttonUCS');
  const buttonBFS = document.getElementById('buttonBFS');
  const buttonDFS = document.getElementById('buttonDFS');

  // Add click event listeners to each button, passing in the button's identifier to the handleButtonClick function
  buttonAstar?.addEventListener('click', () => handleButtonClick('buttonAstar'));
  buttonGreedy?.addEventListener('click', () => handleButtonClick('buttonGreedy'));
  buttonUCS?.addEventListener('click', () => handleButtonClick('buttonUCS'));
  buttonBFS?.addEventListener('click', () => handleButtonClick('buttonBFS'));
  buttonDFS?.addEventListener('click', () => handleButtonClick('buttonDFS'));
}

