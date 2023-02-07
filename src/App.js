import { useState, useEffect } from 'react';
import SelectLocation from './components/SelectLocation';

function App() {
  const [location, setLocation] = useState('https://api.open-meteo.com/v1/forecast?latitude=51.50&longitude=0.13&hourly=temperature_2m&hourly=rain&hourly=snowfall&hourly=windspeed_10m&hourly=cloudcover');
  const [address, setAddress] = useState('');

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

  /*When we successfully obtain user's location we change the state of the location to a new
  API URL*/
  const geoSuccess = (pos) => {
    const newURL = changeWeatherURL(pos.coords);
    setLocation(newURL);
  }

  const geoError = (err) => {
    console.error(err);
  }
  //Get users location, if not retrieved in 5 seconds, then display an error
  const useUserLocation = () => {
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, {
      enableHighAccuracy: true,
      timeout: 5000
    });
  }

  const changeWeatherURL = (newCoords) => {
    const lat = newCoords.latitude || newCoords.lat;
    const lon = newCoords.longitude || newCoords.lon;
    return `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&hourly=rain&hourly=snowfall&hourly=windspeed_10m&hourly=cloudcover`
  }

  //Get the latitude and longitude using geocode API and generate new URL and change state of location 
  const geocodeAddress = async (address) => {
    try {
      const response = await fetch(`https://geocode.maps.co/search?q=${address}`)
      const data = await response.json();
      const location = data[0];
      if (!location) throw Error('No location found');
      const newURL = changeWeatherURL(location);
      setLocation(newURL);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="App grid place-content-center">
      <SelectLocation
        useUserLocation={useUserLocation}
        geocodeAddress={geocodeAddress}
        address={address}
        setAddress={setAddress}
      />
    </div>
  );
}

export default App;
