const searchBar = document.querySelector('#search-bar');


searchBar.addEventListener('input', (event) => {
  // Get the search query
  const query = event.target.value.toUpperCase();

  function getApi() {
    var requestUrl1 = `https://api.coinpaprika.com/v1/coins/btc-bitcoin`;
    var requestUrl2 = `https://api.coinpaprika.com/v1/coins/btc-bitcoin/ohlcv/latest`;
    fetch(requestUrl1)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data)
        console.log(data.name, );
        
      });
    fetch(requestUrl2)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
       console.log(data)
       console.log( data[0].open, data[0].time_open );
        
        
      });
  }
  getApi();
});







