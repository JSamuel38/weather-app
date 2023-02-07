const CurrentTemperature = ({weatherData}) => {
  const currentTime = new Date();
  return (
    <div>
      {currentTime.toLocaleTimeString().slice(0, 5)}
    </div>
  )
}

export default CurrentTemperature