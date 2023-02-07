import { useState, useEffect } from 'react';
 
function App() {
  const [location, setLocation] = useState('https://api.open-meteo.com/v1/forecast?latitude=51.50&longitude=0.13&hourly=temperature_2m&hourly=rain&hourly=snowfall&hourly=windspeed_10m&hourly=cloudcover');

  //Every time we change the location, we execute getData so we don't have to use .json() elsewhere
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(location);
      const locationData = await response.json();
      console.log(locationData);
    };
    try {
      getData();
    } catch (err) {
      console.error(err);
    }
  }, [location]);

  const geoSuccess = async (pos) => {
    const newURL = changeURL(pos.coords);
    setLocation(newURL);
  }

  const geoError = (err) => {
    console.error(err);
  }
  //get users location, if not retrieved in 5 seconds, then display an error
  const useUserLocation = () => {
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, {
      enableHighAccuracy: true,
      timeout: 5000
    });
  }

  const changeURL = (newCoords) => {
    const lat = newCoords.latitude;
    const lon = newCoords.longitude;
    return `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&hourly=rain&hourly=snowfall&hourly=windspeed_10m&hourly=cloudcover`
  }

  return (
    <div className="App">
      <button onClick={useUserLocation}>Use my location</button>
    </div>
  );
}

export default App;
