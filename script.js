


const getData = async() => {
    load.innerHTML = `<h1 class="text-light">Loading....</h1>`
    cityname = inp.value
    let endpoint = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid=3a90821902b11887c3353ceee725e4c3"
    let response = await fetch(endpoint)
    let convertedResponse = await response.json();
    console.log(convertedResponse);
    degreeOfTemperature = Math.round(convertedResponse.main.temp - 273)

    minDegreeOfTemperature = Math.round(convertedResponse.main.temp_min - 273)

    maxDegreeOfTemperature = Math.round(convertedResponse.main.temp_max - 273)

    feelLike = Math.round(convertedResponse.main.feels_like - 273)

    // document.getElementById("showWeatherDetails").style.display= "block"
    show.innerHTML = `  ${degreeOfTemperature}℃  `
    
    location1.innerHTML =`  ${convertedResponse.name}, ${convertedResponse.sys.country} `

    description1.innerHTML = `${convertedResponse.weather[0].description}`

    location2.innerHTML = ` ${convertedResponse.name},${convertedResponse.sys.country}`

    description2.innerHTML = `${convertedResponse.weather[0].description}`

    humidity.innerHTML = `${convertedResponse.main.humidity}
    `
    wind.innerHTML = `${convertedResponse.wind.speed}`

    minTemp.innerHTML = `${minDegreeOfTemperature}`

    maxTemp.innerHTML=`${maxDegreeOfTemperature}`
    
    feel.innerHTML =`${feelLike}`

    pressure.innerHTML =` ${convertedResponse.main.pressure}`

   

  
    

    



} 


