var populationEl = document.getElementById('population')
var attractionEl = document.getElementById('attraction')
var flightsEl = document.getElementById('flights')






// place into a document.ready function
$("#search").on('click', function(){
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
        $('#value-1').html('<h3>'+' Inhabitants:'+ '<br>' + countrypop  )
      
         
        
       $('#img').attr({
         src: response3[0].flag,
         title: 'Country Flag',
         alt: 'Country Flag',
         width: 500, 
         height: 200


       });  
      });
  
  }

  // function imgquery(country){
  //   var queryURL3 = "https://restcountries.eu/rest/v2/name/"+ country + "?fullText=true"
  //   // console.log(queryURL3);
  //   $.ajax({
  //     url: queryURL3,
  //     method: "GET"
  //   })
  //     .then(function (response3) {
  //       console.log(response3);
  //       var src = response3[0].flag;
  //       $('#img').attr( src)

  //     });
  // }