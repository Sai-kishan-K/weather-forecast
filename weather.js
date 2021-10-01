var apikey = '937e4a8100476a8f6e0c1a7773475501';
var msg = document.getElementById('msg');

function getData(){
    var input = document.getElementById('city').value;
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apikey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        document.getElementById("cityname").innerHTML = data.name + ", " + data.sys.country ;
        document.getElementById("temp").innerHTML = data.main.temp + "°c";
        document.getElementById("hi-low").innerHTML = data.main.temp_max+ "/" + data.main.temp_min;
        // document.getElementById("type").innerHTML = data.weather.main;
    })

    .catch(() => {
        msg.textContent = "Search for a valid city name";
    });
}