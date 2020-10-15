var populationEl = document.getElementById('population')
var attractionEl = document.getElementById('attraction')
var flightsEl = document.getElementById('flights')
populationEl.style.display = 'none';
attractionEl.style.display = 'none';
flightsEl.style.display = 'none';
var cityInput = $("#city-input").val()
// place into a document.ready function
$("#search").on('click', function(){
    populationEl.style.display = 'block';
    attractionEl.style.display = 'block';
    flightsEl.style.display = 'block';
    // console.log(cityInput)
    restaurants();
})
function restaurants() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://worldwide-restaurants.p.rapidapi.com/typeahead",
        "method": "POST",
        "headers": {
            "x-rapidapi-host": "worldwide-restaurants.p.rapidapi.com",
            "x-rapidapi-key":  "dd74b83b8emsha204c262aaccdbbp1e7099jsnd652157dfa85",
            "content-type": "application/x-www-form-urlencoded"
        },
        "data": {
            "language": "en_US",
            "q": "band"
        }
    }
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
  } ;

  var tokenSpotify = BQAYWXLnh6T8qcCneWg-n6qC2m2hO9Nn6YTA6qBWRhcd_QeTr4W87fCKe1z4T0c-Vug2MmGZwI1ogCbLQfX25P3S1tcUoqrqFXFwV9sl37gux2KUClAyn70hf6uR5z63ha_ERTgXRYegvn5Q3ssnBaVf20B_IYlmWXA;
  