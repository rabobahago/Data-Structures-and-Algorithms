const HOME_TEAM_WON = 1;
const POINTS = 3;

function tournamentWinner(competitions, results) {
  const scores = new Map();

  for (let i = 0; i < competitions.length; i++) {
    const [homeTeam, awayTeam] = competitions[i];
    const result = results[i];
    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;
    const currentScore = scores.get(winningTeam) || 0;
    scores.set(winningTeam, currentScore + POINTS);
  }

  let currBestScore = 0;
  let currBestTeam = "";
  scores.forEach((score, team) => {
    if (score > currBestScore) {
      currBestScore = score;
      currBestTeam = team;
    }
  });

  return currBestTeam;
}
