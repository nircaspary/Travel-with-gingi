import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Coordinates, Trip } from '../../types/types';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import './map.scss';
import { IoMdArrowDown, IoMdArrowDropdown } from 'react-icons/io';
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

function useDelayUnmount(isMounted: boolean, delayTime: number) {
  const [showDiv, setShowDiv] = useState(false);
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isMounted && !showDiv) {
      setShowDiv(true);
    } else if (!isMounted && showDiv) {
      timeoutId = setTimeout(() => setShowDiv(false), delayTime); //delay our unmount
    }
    return () => clearTimeout(timeoutId); // cleanup mechanism for effects , the use of setTimeout generate a sideEffect
  }, [isMounted, delayTime, showDiv]);
  return showDiv;
}

const mountedStyle = { animation: 'inAnimation 250ms ease-in' };
const unmountedStyle = {
  animation: 'outAnimation 270ms ease-out',
  animationFillMode: 'forwards',
};

const Map = () => {
  const params = useParams();
  const [currentDayNumber, setCurrentDayNumber] = useState<number>(0);
  const [trip, setTrip] = useState<Trip | undefined>();

  const [isMounted, setIsMounted] = useState(false);
  const showDiv = useDelayUnmount(isMounted, 250);

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
      <div className='map' style={{ backgroundColor: '#a0a9' }}></div>
      {/* <LoadScript googleMapsApiKey='AIzaSyAs_AiOKFwbmjBIhgnW3fPw5a3IqEUvxj8'>
        <GoogleMap
          options={{ gestureHandling: 'none', disableDefaultUI: true }}
          clickableIcons={false}
          mapContainerClassName='map'
          center={{ lat, lng }}
          zoom={10}>
          {trip?.routes &&
            routeByDay?.places.map((place, i) => (
              <Marker
                key={i}
                label={(i + 1).toString()}
                position={{ lat: place.coordinates?.lat || 0, lng: place.coordinates?.lng || 0 }}
              />
            ))}
        </GoogleMap>
      </LoadScript> */}
      <div className='trip-details'>
        <div className='trip-details-header'></div>
        <div className='trip-details-container'>
          {trip?.routes &&
            routeByDay?.places.map((place, i) => (
              <div className='trip-detail-container'>
                <div className='trip-detail' key={i} onClick={() => setIsMounted((prev) => !prev)}>
                  <p>{place.name_he}</p>
                  <div className='trip-detail-time'>
                    <p>13:30</p>
                    <IoMdArrowDown color='green' />
                  </div>
                </div>
                {showDiv && (
                  <div style={isMounted ? mountedStyle : unmountedStyle} className='trip-extended-details'>
                    {place.description_he}
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Map;
