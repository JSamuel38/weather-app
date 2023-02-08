import TemperatureList from "./TemperatureList"
import CurrentTemperature from "./CurrentTemperature";

const Weather = ({ weatherData, locationTime, address }) => {
  const convertToDate = (time) => {
    const date = new Date(time);
    return date.toDateString();
  }

  const showTemps = () => {
    return weatherData.hourly.temperature_2m.map((temp, index) => 
      <li key={index} className="w-32 flex-none flex flex-col items-center border-solid border-2 border-black">
        <div className=" text-3xl">
          {Math.floor(temp)}°C
        </div>
        <div>
          {weatherData.hourly.time[index].slice(11)}
        </div>
        <div>
          {convertToDate(weatherData.hourly.time[index])}
        </div>
      </li>
    ) 
  }
  return (
    <div className="border-solid border-black border-2 flex flex-col m-8">
      <CurrentTemperature 
        weatherData={weatherData}
        locationTime={locationTime}
        address={address}
      />
      <h2 className="self-center text-xl font-semibold">Hourly temperatures</h2>
      <TemperatureList 
        weatherData={weatherData} 
        showTemps={showTemps}
      />
    </div>
  )
}

export default Weather