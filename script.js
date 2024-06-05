document.getElementById('convertBtn').addEventListener('click', function() {
    var amount = document.getElementById('amount').value;
    var crypto = document.getElementById('crypto').value;
    var fiat = document.getElementById('fiat').value;
    var apiKey = 'AIzaSyBJ-Ohbjgzg2fraEFTu3v6u64P9ZVXIRMg'; 
    var apiUrl = 'https://api.gemini.com/v2/ticker/' + crypto.toLowerCase() + fiat.toLowerCase();
    document.getElementById('loading').style.display = 'block';
    document.getElementById('conversionResult').style.display = 'none';
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      var convertedAmount = amount * parseFloat(data['ask']);
      document.getElementById('convertedAmount').value = convertedAmount.toFixed(2);
      document.getElementById('conversionResult').innerText = `1 ${crypto} = ${data['ask']} ${fiat}`;
      document.getElementById('conversionResult').style.display = 'block';
      document.getElementById('loading').style.display = 'none';
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('loading').style.display = 'none';
    });
  });