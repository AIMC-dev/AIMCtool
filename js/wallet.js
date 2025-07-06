window.addEventListener('load', () => {
  const connectBtn = document.getElementById('connectWallet');
  const statusEl = document.getElementById('walletStatus');
  const accessMsg = document.getElementById('accessMsg');
  const generatorBlock = document.getElementById('generatorBlock');

  let walletAddress = null;
  const AIMC_TOKEN = 'FxzhtiDpxfFMpc5GoJe49J3XJJiWhdnhTpXHbvQ7pump';

  if (window.solana && window.solana.isPhantom) {
    connectBtn.onclick = async () => {
      try {
        const resp = await window.solana.connect();
        walletAddress = resp.publicKey.toString();
        statusEl.textContent = '✅ Verbonden: ' + walletAddress;

        // Echte token check zou hier komen (placeholder nu)
        if (accessMsg && generatorBlock) {
          accessMsg.innerText = '✅ AIMC-houder bevestigd!';
          generatorBlock.style.display = 'block';
        }
      } catch (err) {
        statusEl.textContent = '❌ Connectie geweigerd';
      }
    };
  } else {
    connectBtn.onclick = () => {
      statusEl.textContent = '❌ Geen Phantom wallet gevonden.';
    };
  }
});