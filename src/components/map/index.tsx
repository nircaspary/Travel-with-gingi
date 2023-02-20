import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const centerPoint = (point1: { lat: number; lng: number }, point2: { lat: number; lng: number }) => {
  const center = { lat: 0, lng: 0 };
  center.lat = (point1.lat + point2.lat) / 2;
  center.lng = (point1.lng + point2.lng) / 2;

  return center;
};
const Map = () => {
  const params = useParams();
  const [routes, setRoutes] = useState<any[]>([]);
  const [mapUrl, setMapUrl] = useState('');
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://localhost:8000/api/v1/trip-data/${params.id}`);

      if (data) {
        setRoutes(data.route);
      }
    })();
  }, [params.id]);

  if (routes[0]?.bounds) {
    console.log(routes);
    const { lat, lng } = centerPoint(routes[0]?.bounds.northeast, routes[0]?.bounds.southwest);

    let urlProps = {
      center: `${lat || 0},${lng || 0}`,
      key: 'AIzaSyAs_AiOKFwbmjBIhgnW3fPw5a3IqEUvxj8',
      size: '1000x1000',
      markers: `color:black|label:1|${routes[1].coordinates[0].lat},${routes[0].coordinates[0].lng}
      |${routes[1].coordinates[1].lat},${routes[1].coordinates[1].lng}
      |${routes[2].coordinates[2].lat},${routes[2].coordinates[2].lng}
      |${routes[3].coordinates[3].lat},${routes[3].coordinates[3].lng}`,
    };
    const url = new URL(`http://maps.googleapis.com/maps/api/staticmap`);
    url.search = new URLSearchParams(urlProps).toString();
    setMapUrl(url.href);
  }

  return routes.length > 0 ? (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      <button>next</button>
      <button>prev</button>
      <img alt='map' src={mapUrl} id='map'></img>
    </div>
  ) : (
    <div></div>
  );
};

export default Map;
