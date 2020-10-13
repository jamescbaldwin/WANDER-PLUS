var populationEl = document.getElementById('population')
var attractionEl = document.getElementById('attraction')
var flightsEl = document.getElementById('flights')


populationEl.style.display = 'none';
attractionEl.style.display = 'none';
flightsEl.style.display = 'none';



// place into a document.ready function
$("#search").on('click', function(){
    populationEl.style.display = 'block';
    attractionEl.style.display = 'block';
    flightsEl.style.display = 'block';


})