const Temperature = ({ weatherData }) => {
  const convertToDate = (time) => {
    const date = new Date(time);
    return date.toDateString();
  }

  const showTemps = () => {
    return weatherData.hourly.temperature_2m.map((temp, index) => 
      <li key={index} className="flex flex-col items-center w-full border-solid border-2 border-black">
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
    <ul>{(weatherData.hourly) ? showTemps() : null}</ul>
  )
}

export default Temperature