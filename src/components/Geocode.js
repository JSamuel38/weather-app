const Geocode = ({ geocodeAddress, address, setAddress }) => {
  return (
    <form>
      <label htmlFor="location">Location</label>
      <input
        type="text"
        id="location"
        placeholder="Tokyo"
        className="border-solid border-2 border-black p-1 m-2"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          geocodeAddress(address);
        }
        }>Geocode address</button>
    </form>
  )
}

export default Geocode