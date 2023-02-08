import { useState, useEffect } from 'react';
import SelectLocation from './components/SelectLocation';
import Weather from './components/Weather';

function App() {
  const [location, setLocation] = useState('https://api.open-meteo.com/v1/forecast?latitude=51.50&longitude=0.13&hourly=temperature_2m&hourly=rain&hourly=snowfall&hourly=windspeed_10m&hourly=cloudcover');
  const [address, setAddress] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [locationTime, setLocationTime] = useState('');

  //Every time we change the location, we execute getData so we don't have to use .json() elsewhere
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(location);
      const locationData = await response.json();
      setWeatherData(locationData);
      const newAddressRes = await fetch(`https://geocode.maps.co/reverse?lat=${locationData.latitude}&lon=${locationData.longitude}`);
      let newAddress = await newAddressRes.json();
      newAddress = newAddress.display_name.split(',');
      newAddress = newAddress[3] + ', ' + newAddress[newAddress.length - 1];
      setAddress(newAddress);
      locationTimeHandler(locationData);
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

  //Get the time of the requested location
  const locationTimeHandler = async (location) => {
    const response = await fetch(`http://api.geonames.org/timezoneJSON?lat=${location.latitude}&lng=${location.longitude}&username=jsamuel38`);
    const data = await response.json();
    setLocationTime(data.time);
  }

  return (
    <div className="App">
      <Weather
        weatherData={weatherData}
        locationTime={locationTime}
        address={address}
      />
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
