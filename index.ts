// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Alternating Sums</h1>`;

function alternatingSums(a: number[]): number[] {
  const team1: number[] = [];
  const team2: number[] = [];

  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      team1.push(a[i])
    } else {
      team2.push(a[i])
    }
  }
  const weightsArr = [team1.reduce((acc, val) => acc + val, 0), team2.reduce((acc, val) => acc + val, 0)]
  return weightsArr;
}

console.log(alternatingSums([50, 60, 60, 45, 70]))