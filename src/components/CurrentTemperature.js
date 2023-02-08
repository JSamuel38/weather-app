const CurrentTemperature = ({ weatherData, locationTime, address }) => {
  const time = new Date(locationTime).toLocaleString();
  return (
    <div>
      <div>
        {`${address} Local time: ${time.slice(0, 17)}`}
      </div>
      <div>
        {weatherData.hourly ? `${Math.floor(weatherData.hourly.temperature_2m[0])}°C` : null}
      </div>
    </div>
  )
}

export default CurrentTemperature