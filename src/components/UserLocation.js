const UserLocation = ({ useUserLocation }) => {
  return (
    <div className="flex justify-center">
      <button 
        onClick={useUserLocation}
        className="mx-2 w-32 p-1 rounded-lg border-solid border-2 border-black hover:border-black hover:bg-black hover:text-white"
      >Use My Location</button>
    </div>
  )
}

export default UserLocation