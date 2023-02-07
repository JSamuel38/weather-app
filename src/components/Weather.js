import Temperature from "./Temperature"

const Weather = ({ weatherData }) => {
  return (
    <div>
      <Temperature weatherData={weatherData}/>
    </div>
  )
}

export default Weather