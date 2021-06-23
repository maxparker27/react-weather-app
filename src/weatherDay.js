import rainImage from "./rainImage.gif";
import cloudImage from "./cloudImage.gif";

function determineImage(forecast) {
    if (forecast.includes("rain")) {
        return <img  className = "forecastImage" src = {rainImage} alt = "rain gif to show that there is rain"/>
    }
    else if (forecast.includes("cloud")) {
        return <img  className = "forecastImage" src = {cloudImage} alt = "cloud gif to show that there are clouds"/>
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
                    <h3 className = "weekdays">Weekday: {props.day}</h3>
                    <div>{determineImage(props.description)}</div>
                    <div className = "allInformationAboutDays">
                        <div className = "temperatures">Temperature: {props.temperature}°</div>
                        <div className = "feelslikes">Feels Like: {props.feelsLike}°</div>
                        <div className = "aligningDescriptions">
                            <div className = "descriptions">Forecast:</div>
                            <div className = "descriptionsText">{props.description}</div>
                        </div>
                        <div className = "humidities">Humidity: {props.humidity}%</div>
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
