
const searchBar = document.querySelector('#search-bar');
const searchButton = document.querySelector('#search-button');

function api(event) {
  event.preventDefault()
  if (searchBar.value) {
    const query = searchBar.value.toUpperCase();
    var requestUrl1 = `https://api.coinpaprika.com/v1/coins/${query}/ohlcv/latest`;
    
    searchBar.value = '';


    fetch(requestUrl1)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        
        console.log(data[0].open, data[0].time_open,);
      });
      
  }
 
   else {
    console('Please enter a crypto name');
  }
 
};

searchButton.addEventListener('click', api);

