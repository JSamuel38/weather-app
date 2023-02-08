const CurrentTemperature = ({ weatherData, locationTime, address }) => {
    const currentHour = () => {
    return (locationTime.slice(11, 12) === '0') ?  locationTime.slice(12, 13) : locationTime.slice(11, 13);
  }

  return (
    <div className="w-32 h-32 mt-6 mb-2 grid place-content-center border-solid border-2 border-black break-words self-center">
      <div>
        {address}
      </div>
      <div>
        {locationTime.slice(11)}
      </div>
      <div>
        {weatherData.hourly ? `${Math.floor(weatherData.hourly.temperature_2m[currentHour()])}°C` : null}
      </div>
    </div>
  )
}

export default CurrentTemperature