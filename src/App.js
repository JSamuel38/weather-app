import { useState, useEffect } from 'react';
 
function App() {
  const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=1.70&longitude=-1.30&hourly=temperature_2m&hourly=rain&hourly=snowfall&hourly=windspeed_10m&hourly=cloudcover';

  const [location, setLocation] = useState(API_URL);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(API_URL);
      const locationData = await response.json();
      console.log(locationData);
    };
    try {
      getData();
    } catch (err) {
      console.error(err);
    }
  }, [location]);

  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
