let weather = {
    'apiKey' : '2e4060dc2fe910bc8482aa9631b08e88',
    fetchWeather: function(city) {
        fetch( //call geocode to return lat/long, then do dependant call to return the lat and long as the weather
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
        
    },
    displayWeather : function(data) {
        const { name } = data;
        const { icon, description } = data.weather;
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon,description,temp,humidity,speed);
    }
}