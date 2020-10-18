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
      
       var lat = response3[0].latlng[0]
       var lon = response3[0].latlng[1]
       var borders = response3[0].borders

       for (let i = 0; i < borders.length; i++) {
        $('.grid-item1').html("<ol>" + "<li>" + borders.length[i])
         
       }
        
       $('#img').attr({
         src: response3[0].flag,
         title: 'Country Flag',
         alt: 'Country Flag',
         width: 500, 
         height: 200
 
       }); 
       var queryURL2 = "https://api.sunrise-sunset.org/json?lat=" + lat + "&lng=" + lon;
      // console.log(queryURL2);
      $.ajax({
        url: queryURL2,
        method: "GET"
      })
      // After the data comes back from the API
      .then(function (response2) {
        console.log(response2);
      var sunrise = response2.results.sunrise
      var sunset = response2.results.sunset
      console.log(sunrise)
      console.log(sunset)
        $('.grid-item2').html("<ul>" + "<li> Sunrise: " + sunrise +"<li> Sunset: "+ sunset)

      });
      });

  }

// james code for the
  var mini = true;
function toggleSidebar() {
  if (mini) {
    console.log("opening sidebar");
    document.getElementById("mySidebar").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
    this.mini = false;
  } else {
    console.log("closing sidebar");
    document.getElementById("mySidebar").style.width = "40px";
    document.getElementById("main").style.marginLeft = "40px";
    this.mini = true;
  }
}