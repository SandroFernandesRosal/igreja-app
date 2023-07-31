import { GoogleMap, Marker, GoogleApiWrapper } from 'google-maps-react'
import { useMemo } from 'react'

const GoogleMapa = () => {
  const { isLoaded } = GoogleApiWrapper({
    googleMapsApiKey: 'AIzaSyBQnRh2odQwStOs7zwDfPfU28lYXaAukxQ',
  })
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), [])

  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        >
          <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
        </GoogleMap>
      )}
    </div>
  )
}

export default GoogleMapa
