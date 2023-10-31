import { IWeather } from "./IWeather";

function Card({ weather }: { weather: IWeather | null }) {
  return (
    <div className="card">
      {weather && (
        <div>
          <h1>{weather.name}</h1>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Feels Like: {weather.main.feels_like}°C</p>
          <p>
            Min Temp: {weather.main.temp_min}°C, Max Temp:{" "}
            {weather.main.temp_max}°C
          </p>
          <p>Humidity: {weather.main.humidity}%</p>
          <div>
            <h2>Weather:</h2>
            {weather.weather.map((w, index) => (
              <div key={index}>
                <p>Main: {w.main}</p>
                <p>Description: {w.description}</p>
                <img
                  src={`http://openweathermap.org/img/w/${w.icon}.png`}
                  alt={w.description}
                />
              </div>
            ))}
          </div>
          <p>
            Wind Speed: {weather.wind.speed}m/s, Direction: {weather.wind.deg}°
          </p>
        </div>
      )}
      {!weather && <p>No weather data available</p>}
    </div>
  );
}
export default Card;
