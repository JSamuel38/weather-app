const CurrentTemperature = ({ weatherData, locationTime, address }) => {
  const time = new Date(locationTime).toLocaleString();
  return (
    <div>
      {`${address} Local time: ${time.slice(0, 17)}`}
    </div>
  )
}

export default CurrentTemperature