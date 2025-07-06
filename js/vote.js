let votes = {
  'Elon Musk': 0,
  'ChatGPT': 0,
  'Solana degen': 0,
  'Katten met laserogen': 0
};
let hasVoted = false;

function submitVote(option) {
  if (hasVoted) {
    document.getElementById('voteResult').innerText = '❌ Je hebt al gestemd.';
    return;
  }
  votes[option]++;
  hasVoted = true;
  let resultText = '✅ Stem ontvangen!\n\nHuidige stand:\n';
  for (let key in votes) {
    resultText += `${key}: ${votes[key]} stemmen\n`;
  }
  document.getElementById('voteResult').innerText = resultText;
}