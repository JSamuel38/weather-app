const TemperatureList = ({ weatherData, showTemps }) => {
  return (
    <ul className="flex gap-2 overflow-auto">{(weatherData.hourly) ? showTemps() : null}</ul>
  )
}

export default TemperatureList;