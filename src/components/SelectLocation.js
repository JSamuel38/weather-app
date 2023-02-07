import Geocode from "./Geocode"
import UserLocation from "./UserLocation"

const SelectLocation = ({ useUserLocation, geocodeAddress, address, setAddress }) => {
  return (
    <div className="grid">
      <Geocode 
        geocodeAddress={geocodeAddress}
        address={address} 
        setAddress={setAddress} 
      />
      <UserLocation useUserLocation={useUserLocation} />
    </div>
  )
}

export default SelectLocation