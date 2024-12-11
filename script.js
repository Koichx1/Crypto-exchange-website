document.getElementById('convert-btn').addEventListener('click', async () => {
  const crypto = document.getElementById('crypto-select').value;
  const amount = parseFloat(document.getElementById('crypto-amount').value);

  if (!amount || amount <= 0) {
    document.getElementById('result').textContent = 'Please enter a valid amount.';
    return;
  }

  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd`
    );
    const data = await response.json();
    const usdPrice = data[crypto].usd;
    const usdValue = (amount * usdPrice).toFixed(2);

    document.getElementById('result').textContent = `${amount} ${crypto} is equivalent to $${usdValue} USD.`;
  } catch (error) {
    document.getElementById('result').textContent = 'Error fetching data.';
  }
});
