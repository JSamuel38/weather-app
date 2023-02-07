import Geocode from "./Geocode"

const SelectLocation = ({ useUserLocation, geocodeAddress, address, setAddress }) => {
  return (
    <div>
      <button onClick={useUserLocation}>Use my location</button>
      <Geocode 
        geocodeAddress={geocodeAddress}
        address={address} 
        setAddress={setAddress} 
      />
    </div>
  )
}

export default SelectLocation