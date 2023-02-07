import TemperatureList from "./TemperatureList"
import CurrentTemperature from "./CurrentTemperature";

const Weather = ({ weatherData }) => {
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
    <div className="border-solid border-black border-2 ">
      <CurrentTemperature 
        weatherData={weatherData}
        convertToDate={convertToDate}
      />
      <TemperatureList 
        weatherData={weatherData} 
        showTemps={showTemps}
      />
    </div>
  )
}

export default Weather