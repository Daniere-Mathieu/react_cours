import { useEffect, useState } from "react";
import { IWeatherForecast } from "./IWeather";

function Forecast({ forecast }: { forecast: IWeatherForecast | null }) {
  const [tab, setTab] = useState<string[]>([]);
  const [selectedTab, setSelectedTab] = useState<string>();

  useEffect(() => {
    if (!forecast) return;

    const firstDate = new Date(forecast.list[0].dt_txt);
    const tabBuffer: string[] = [];

    for (let i = 0; i < 5; i++) {
      const currentDate = new Date(firstDate);
      currentDate.setDate(firstDate.getDate() + i);
      const formattedDate = `${currentDate.getDate()} ${currentDate.toLocaleString(
        "default",
        { month: "long" }
      )}`;
      tabBuffer.push(formattedDate);
    }
    setTab(tabBuffer);
    setSelectedTab(tab[0]);
  }, [forecast]);

  return (
    <div>
      {forecast && (
        <div>
          <h1>Weather Forecast for {forecast.city.name}</h1>
          <div className="tabs">
            {tab &&
              tab.map((t, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTab(t)}
                  className={`${selectedTab === t ? "active" : ""} tabs-button`}
                >
                  {t}
                </button>
              ))}
          </div>
          <div className="forecast-container">
            {forecast.list
              .filter((item) => {
                const itemDate = new Date(item.dt_txt);
                const formattedItemDate = `${itemDate.getDate()} ${itemDate.toLocaleString(
                  "default",
                  { month: "long" }
                )}`;
                return formattedItemDate === selectedTab;
              })
              .map((item, index) => (
                <div key={index} className="card">
                  <h3>{new Date(item.dt_txt).toLocaleString()}</h3>
                  <p>Temperature: {item.main.temp}°C</p>
                  <p>Feels Like: {item.main.feels_like}°C</p>
                  <p>
                    Min Temp: {item.main.temp_min}°C, Max Temp:{" "}
                    {item.main.temp_max}°C
                  </p>
                  <p>Humidity: {item.main.humidity}%</p>
                  <div>
                    <h4>Weather:</h4>
                    {item.weather.map((w, index) => (
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
                    Wind Speed: {item.wind.speed}m/s, Direction: {item.wind.deg}
                    °
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}
      {!forecast && <p>No forecast data available</p>}
    </div>
  );
}
export default Forecast;
