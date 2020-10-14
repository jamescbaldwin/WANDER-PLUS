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
    var country = $("#city-input").val()
    // console.log(cityInput)
    query3(country);

})

function query3(country) {


    var queryURL3 = "https://restcountries.eu/rest/v2/name/"+ country + "?fullText=true"
    // console.log(queryURL3);
    $.ajax({
      url: queryURL3,
      method: "GET"
    })
  
      .then(function (response3) {
        console.log(response3);
     
        var countrypop = response3[0].population
        $('#value-1').html('<h3>' +'Population: ' + countrypop)
      
        var src = response3[0].flag;
        var img = $('<img>')
       var total =  img.attr('src' , src)
        $('#countryflag').append(total)
      });
  
  }