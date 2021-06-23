import './App.css';
import React, { useEffect, useState } from "react";
import {WeatherDay} from "./components/weatherDay";
import {Header} from "./components/weatherDay";

const url = "https://api.openweathermap.org/data/2.5/onecall?lat=51.5074&lon=0.1278&units=metric&exclude=minutely,hourly&appid=$"


function dealWithDate(date) {
  if (date === 0 || date === 7) {
    return ("Sunday");
  }
  else if (date === 1 || date === 8) {
    return ("Monday");
  }
  else if (date === 2 || date === 9) {
    return ("Tuesday");
  }
  else if (date === 3 || date === 10) {
    return ("Wednesday");
  }
  else if (date === 4 || date === 11) {
    return ("Thursday");
  }
  else if (date === 5 || date === 12) {
    return ("Friday");
  }
  else if (date === 6 || date === 13) {
    return ("Saturday");
  }
}

function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()
      }    
        throw response;
        })
    .then(data => {
      console.log(data);
      setData(data.daily);
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    })
  }, [])
  console.log(typeof data, Array.isArray(data));

  if (loading) return <h1>Loading...</h1>
  if (error)
      return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;

  return (
    <div className = "container">
      <Header name = "My Weather Channel by Max Parker"/>
      { data.filter((item, index) => index < 5).map((item, index) => {
        return <WeatherDay
        className = "todayPlus"
        day = {dealWithDate(new Date().getDay()+index)}
        temperature = {item.temp.day}
        feelsLike = {item.feels_like.day}
        description = {item.weather[0].description}
        humidity = {item.humidity} />
      })}
    </div> )
    
  };  



export default App;
