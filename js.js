  var tokenSpotify = BQAYWXLnh6T8qcCneWg-n6qC2m2hO9Nn6YTA6qBWRhcd_QeTr4W87fCKe1z4T0c-Vug2MmGZwI1ogCbLQfX25P3S1tcUoqrqFXFwV9sl37gux2KUClAyn70hf6uR5z63ha_ERTgXRYegvn5Q3ssnBaVf20B_IYlmWXA;
  
  var countryListURL = "https://restcountries.eu/rest/v2/all"

async function start() {
    const response = await fetch(countryListURL)
    const data = await response[i].json()
    createCountryList(data.name)
    console.log(response[i].name); 
}

start()

function createCountryList(countryList) {
    document.getElementById("list").innerHTML = `
    <select>
      <option>Traverse the Globe</option>
      ${Object.keys(countryList).map(function (country) {
        return `<option>${country}</option>`
      }).join('')}
      </select>
    `
  }
