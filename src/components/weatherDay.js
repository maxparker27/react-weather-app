import rainImage from "./rainImage.gif";
import cloudImage from "./cloudImage.gif";
import sunImage from "./sunImage.gif";

function determineImage(forecast) {
    if (forecast.includes("rain")) {
        return <img  className = "forecastImage" src = {rainImage} alt = "rain gif to show that there is rain"/>
    }
    else if (forecast.includes("cloud")) {
        return <img  className = "forecastImage" src = {cloudImage} alt = "cloud gif to show that there are clouds"/>
    }
    else if (forecast.includes("clear") || forecast.includes("sun")) {
        return <img  className = "forecastImage" src = {sunImage} alt = "sun gif to show that there is sun"/>
    }
}

function Header(props) {
    return (
        <>
            <h4 className = "myHeader" >{props.name}</h4>
            <h1 className = "myHeader">Five Day Forecast (London, England)</h1>
        </>
    )
}

function WeatherDay(props) {

    return(
        <div>
            <div className = "allDays">
                <div className = {props.className}>
                    <h3 className = "weekdays"><b>Weekday: </b>{props.day}</h3>
                    <div>{determineImage(props.description)}</div>
                    <div className = "allInformationAboutDays">
                        <div className = "temperatures"><b>Temperature: </b>{props.temperature}°</div>
                        <div className = "feelslikes"><b>Feels Like: </b>{props.feelsLike}°</div>
                        <div className = "descriptionsText"><b>Forecast: </b><i>{props.description}</i></div>
                        <div className = "humidities"><b>Humidity: </b>{props.humidity}%</div>
                    </div>
                </div>
            </div>
        </div>
    )
};



export {
    Header,
    WeatherDay,
};
