function generateMeme() {
  const prompt = document.getElementById('memePrompt').value;
  const resultDiv = document.getElementById('memeResult');
  if (!prompt) {
    resultDiv.innerHTML = '<p style="color:red;">Voer eerst een meme-idee in!</p>';
    return;
  }
  resultDiv.innerHTML = '<p><strong>AI Meme output voor:</strong> ' + prompt + '</p>' +
    '<img src="https://api.memegen.link/images/custom/_/' + encodeURIComponent(prompt) + '.png?background=none" alt="meme" />'; 
} 