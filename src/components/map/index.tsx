import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Coordinates, Trip } from '../../types/types';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import './map.scss';
const centerPoint = (points: (Coordinates | undefined)[] | undefined) => {
  let latSum = 0;
  let lngSum = 0;
  if (points) {
    for (let point of points) {
      latSum += point?.lat || 0;
      lngSum += point?.lng || 0;
    }
    return { lat: latSum / points.length, lng: lngSum / points.length };
  } else {
    return { lat: latSum, lng: lngSum };
  }
};
const Map = () => {
  const params = useParams();
  const [currentDayNumber, setCurrentDayNumber] = useState<number>(0);
  const [trip, setTrip] = useState<Trip | undefined>();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get<Trip>(`http://localhost:8000/api/v1/trip-data/${params.id}`);
      setTrip(data);
    })();
  }, [params.id]);
  const routeByDay = trip?.routes[currentDayNumber];
  const routeCoordinates = routeByDay?.places.map((place) => place.coordinates);
  const { lat, lng } = centerPoint(routeCoordinates);

  return (
    <div className='map-container'>
      <div className='day-controller'>
        <button
          onClick={() =>
            setCurrentDayNumber((prev) => {
              if (prev > 0) return prev - 1;
              else return 0;
            })
          }>
          prev
        </button>

        <div>{routeByDay?.dayName}</div>
        <button
          onClick={() =>
            setCurrentDayNumber((prev) => {
              if (prev < 3) return prev + 1;
              else return 3;
            })
          }>
          next
        </button>
      </div>
      <LoadScript googleMapsApiKey='AIzaSyAs_AiOKFwbmjBIhgnW3fPw5a3IqEUvxj8'>
        <GoogleMap
          options={{ gestureHandling: 'none', disableDefaultUI: true }}
          clickableIcons={false}
          mapContainerClassName='map'
          center={{ lat, lng }}
          zoom={10}>
          {trip?.routes &&
            routeByDay?.places.map((place, i) => (
              <Marker
                label={(i + 1).toString()}
                position={{ lat: place.coordinates?.lat || 0, lng: place.coordinates?.lng || 0 }}
              />
            ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
