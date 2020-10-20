  $("#search").on('click', function(){
    var country = $("#city-input").val()
    $("#displayCountryName").html(country)
    // console.log(cityInput)
    query3(country);
    query(country);
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
      $('#value-1').html('<h3>'+' Inhabitants: '+ '<br>' + countrypop  )
  
      var borders = response3[0].borders
      for (let i = 0; i < borders.length; i++)
      $('#sec1').html('<h1>' + 'Bordering Countries (abbr): ' + borders)
  
      var languages = response3[0].languages[0].name
      for (i = 0; i < languages.length; i++)
      $('#sec2').html('<h1>' + 'Languages: ' + languages)
  
      var lat = response3[0].latlng[0]
      var lon = response3[0].latlng[1]
  
      $('#img').attr({
        src: response3[0].flag,
        title: 'Country Flag',
        alt: 'Country Flag',
        width: 420, 
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
  
         $('#sec3').html('<h1>'+'Sunrise: '+ sunrise + '<br>' + 'Sunset: ' + sunset)
       });
       });
   };
  
  ///keeo all code above
    var countryArray = [
      "Afghanistan", 
      "Åland Islands",
      "Albania",
      "Algeria",
      "American Samoa",
      "Andorra",
      "Angola",
      "Anguilla",
      "Antarctica",
      "Antigua and Barbuda",
      "Argentina",
      "Armenia",
      "Aruba",
      "Australia",
      "Austria",
      "Azerbaijan",
      "Bahamas",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bermuda",
      "Bhutan",
      "Bolivia (Plurinational State of)",
      "Bonaire, Sint Eustatius and Saba",
      "Bosnia and Herzegovina",
      "Botswana",
      "Bouvet Island",
      "Brazil",
      "British Indian Ocean Territory",
      "United States Minor Outlying Islands",
      "Virgin Islands (British)",
      "Virgin Islands (U.S.)",
      "Brunei Darussalam",
      "Bulgaria",
      "Burkina Faso", 
      "Burundi",
      "Cambodia",
      "Cameroon",
      "Canada",
      "Cabo Verde",
      "Cayman Islands",
      "Central African Republic",
      "Chad",
      "Chile",
      "China",
      "Christmas Island",
      "Cocos (Keeling) Islands",
      "Colombia",
      "Comoros",
      "Congo",
      "Congo (Democratic Republic of the)",
      "Cook Islands",
      "Costa Rica",
      "Croatia",
      "Cuba",
      "Curaçao",
      "Cyprus",
      "Czech Republic",
      "Denmark",
      "Djibouti",
      "Dominica",
      "Dominican Republic",
      "Ecuador",
      "Egypt",
      "El Salvador",
      "Equatorial Guinea",
      "Eritrea",
      "Estonia",
      "Ethiopia",
      "Falkland Islands (Malvinas)",
      "Faroe Islands",
      "Fiji",
      "Finland",
      "France",
      "French Guiana",
      "French Polynesia",
      "French Southern Territories",
      "Gabon",
      "Gambia",
      "Georgia",
      "Germany",
      "Ghana",
      "Gibraltar",
      "Greece",
      "Greenland",
      "Grenada",
      "Guadeloupe",
      "Guam",
      "Guatemala",
      "Guernsey",
      "Guinea",
      "Guinea-Bissau",
      "Guyana",
      "Haiti",
      "Heard Island and McDonald Islands",
      "Holy See",
      "Honduras",
      "Hong Kong",
      "Hungary",
      "Iceland",
      "India",
      "Indonesia",
      "Côte d'Ivoire",
      "Iran (Islamic Republic of)",
      "Iraq",
      "Ireland",
      "Isle of Man",
      "Israel",
      "Italy",
      "Jamaica",
      "Japan",
      "Jersey",
      "Jordan",
      "Kazakhstan",
      "Kenya",
      "Kiribati",
      "Kuwait",
      "Kyrgyzstan",
      "Lao People's Democratic Republic",
      "Latvia",
      "Lebanon",
      "Lesotho",
      "Liberia",
      "Libya",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Macao",
      "Macedonia (the former Yugoslav Republic of)",
      "Madagascar",
      "Malawi",
      "Malaysia",
      "Maldives",
      "Mali",
      "Malta",
      "Marshall Islands",
      "Martinique",  
      "Mauritania",
      "Mauritius",
      "Mayotte",
      "Mexico",
      "Micronesia (Federeated States of)",
      "Moldova (Republic of)",
      "Monaco",
      "Mongolia",
      "Montenegro",
      "Montserrat",
      "Morocco",
      "Mozambique",
      "Myanmar",
      "Namibia",
      "Nauru",
      "Nepal",
      "Netherlands",
      "New Caledonia",
      "New Zealand",
      "Nicaragua",
      "Niger",
      "Nigeria",
      "Niue",
      "Norfolk Island",
      "Korea (Democratic People's Republic of)",
      "Northern Mariana Islands",
      "Norway",
      "Oman",
      "Pakistan",
      "Palau",
      "Palestine, State of", 
      "Panama",
      "Papua New Guinea",
      "Paraguay",
      "Peru",
      "Philippines",
      "Pitcairn",   
      "Poland",
      "Portugal",
      "Puerto Rico",  
      "Qatar",
      "Republic of Kosovo",
      "Réunion",
      "Romania",
      "Russian Federation",
      "Rwanda",
      "Saint Barthélemy",
      "Saint Helena, Ascension and Tristan da Cunha",
      "Saint Kitts and Nevis",
      "Saint Lucia",
      "Saint Martin (French Part)",
      "Saint Pierre and Miquelon", 
      "Saint Vincent and the Grenadines",
      "Samoa",
      "San Marino",
      "Sao Tome and Principe",
      "Saudi Arabia",
      "Senegal",
      "Serbia",
      "Seychelles",
      "Sierra Leone",
      "Singapore",
      "Sint Maarten (Dutch Part)",
      "Slovakia",
      "Slovenia",
      "Solomon Islands",
      "Somalia",
      "South Africa",
      "South Georgia and the South Sandwich Islands",
      "Korea (Republic of)",
      "South Sudan",
      "Spain",
      "Sri Lanka",
      "Sudan",
      "Suriname",
      "Svalbard and Jan Mayen",
      "Swaziland",
      "Sweden",
      "Switzerland",
      "Syrian Arab Republic",
      "Taiwan",
      "Tajikistan",
      "Tanzania, United Republic of",
      "Thailand",
      "Timor-Leste",
      "Togo",
      "Tokelau",
      "Tonga",
      "Trinidad and Tobago",
      "Tunisia",
      "Turkey",
      "Turkmenistan",
      "Turks and Caicos Islands",
      "Tuvalu",
      "Uganda",
      "Ukraine",
      "United Arab Emirates",
      "United Kingdom of Great Britain and Northern Ireland", //abbr
      "United States of America",
      "Uruguay",
      "Uzbekistan",
      "Vanuatu",
      "Vatican City",
      "Venezuela (Bolivarian Republic of)", //abbr
      "Viet Nam",
      "Wallis and Futuna",
      "Western Sahara",
      "Yemen",
      "Zambia",
      "Zimbabwe"
    ]
  
    function makeList() {
      for (let i = 0; i < countryArray.length; i++) {
        $('#mySidebar').append(`<li> <button class='s'>  ${countryArray[i]}  </button> </li>`) 
      }   
      // figure out how to make everything a button as well
    }
    $('#mySidebar').on('click', '.s' , function(){
      var clickcountry = $(this).text().trim()
      console.log(clickcountry)
      query3(clickcountry);
      $("#displayCountryName").html(clickcountry)
    })
  
  makeList();
  
  var hover = true;
  
  function toggleSidebar() {
    if (hover) {
      // console.log("opening sidebar");
      document.getElementById("mySidebar").style.width = "210px";
      $("")
      // document.getElementById("main").style.marginLeft = "200px";
      this.hover = false;
    } else {
      // console.log("closing sidebar");
      document.getElementById("mySidebar").style.width = "40px";
      // document.getElementById("main").style.marginLeft = "40px";
      this.hover = true;
    }
  }
