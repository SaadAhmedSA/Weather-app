let apikey = "5779b7d65fe7e1ba836123ebd42b5416"
let url ='https://api.openweathermap.org/data/2.5/weather?units=metric'

let input = document.getElementById("input")
let city = document.getElementById("city")
let temp = document.getElementById("temprature")
let wind= document.getElementById("wind")
let humidity= document.getElementById("humidity")
async function weather(){
    let response = await fetch(url+`&q=${input.value}`+`&appid=${apikey}`)
    let data = await response.json()

    temp.innerHTML=data.main.temp+"°C"
   city.innerText=data.name
   humidity.innerText=data.main.humidity+"%"
   wind.innerText=data.wind.speed+"km/h"
    input.value=" "
}
