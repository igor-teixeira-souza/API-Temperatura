async function getWeather(){
    var local = document.getElementById('lugar-esperado')
    
    try {
        var response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${local.value.trim()}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`)
        document.querySelector('.dados').style.display = 'block'

        var tempCelcius = response.data.main.temp
        var minima = response.data.main.temp_min
        var maxima = response.data.main.temp_max

        document.getElementById("minima").innerHTML = minima
        document.getElementById("maxima").innerHTML = maxima
        document.getElementById("temperatura").innerHTML = tempCelcius.toFixed(1) + '°C'
    } catch (e) {
        document.getElementById("temperatura").innerHTML = `Não encontrei "${local.value.trim()}"!`
        document.getElementById("minima").innerHTML = '-'
        document.getElementById("maxima").innerHTML = '-'
    }

}
