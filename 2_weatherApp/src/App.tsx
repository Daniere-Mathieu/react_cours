import { useEffect, useState } from "react";
import "./App.css";
import { IWeather, IWeatherForecast } from "./IWeather";
import Card from "./Card";
import Forecast from "./Forecast";

function App() {
  const [weather, setWeather] = useState<IWeather | null>(null);
  const [forecast, setForecast] = useState<IWeatherForecast | null>(null);

  async function fetchWeather(latitude: number, longitude: number) {
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=4e535a70b5a78cd3cbafb9d4561179b4&units=metric`
    );
    const data = await result.json();
    setWeather(data);
  }

  async function fetchWeatherForecast(latitude: number, longitude: number) {
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=4e535a70b5a78cd3cbafb9d4561179b4&units=metric`
    );
    const data = await result.json();
    setForecast(data);
  }
  function getPosition(
    success: (position: Position) => void,
    error?: (error: PositionError) => void
  ) {
    navigator.geolocation.getCurrentPosition(success, error);
  }

  function success(position: Position) {
    fetchWeather(position.coords.latitude, position.coords.longitude);
    fetchWeatherForecast(position.coords.latitude, position.coords.longitude);
  }

  function error(error: PositionError) {
    console.log(error);
  }

  useEffect(() => {
    getPosition(success, error);
  }, []);
  return (
    <div>
      <Card weather={weather} />
      <Forecast forecast={forecast} />
    </div>
  );
}

export default App;
