// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Alternating Sums</h1>`;

function alternatingSums(a: number[]): number[] {
  const team1: number[] = [];
  const team2: number[] = [];

  for (let i = 0; i < a.length; i++) {
    console.log(a[i])
  }
  console.log("team1", team1);
  console.log("team2", team2);

}

console.log(alternatingSums([50, 60, 60, 45, 70]))