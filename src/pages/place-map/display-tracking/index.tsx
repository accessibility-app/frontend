import {
  DirectionsRenderer,
  GoogleMap,
  Marker,
  useJsApiLoader,
} from '@react-google-maps/api';
import { FC, useEffect, useState } from 'react';
import { GOOGLE_API_KEY } from '../../details';
import { GiPathDistance } from 'react-icons/gi';
import { FaSatelliteDish } from 'react-icons/fa6';
import { BsPersonWalking } from 'react-icons/bs';
import RadarLoading from '../../../lib/component/loader';

interface Props {
  cords: {
    lat: number;
    lng: number;
  };
  showView: React.Dispatch<React.SetStateAction<string>>;
}
const DisplayTracking: FC<Props> = ({ cords, showView }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_API_KEY,
  });
  const [isBusy, setIsBusy] = useState(false);
  const [{ lat, lon }, setCordss] = useState({
    lat: 0,
    lon: 0,
  });
  const geolocationAPI = navigator.geolocation;
  const getUserCoordinates = () => {
    setIsBusy(true);
    const options = {
      enableHighAccuracy: true,
      timeout: Infinity,
      maximumAge: 0,
    };
    if (!geolocationAPI) {
      alert('Geolocation API is not available in your browser!');
    } else {
      geolocationAPI.getCurrentPosition(
        (position) => {
          const { coords } = position;
          setCordss({
            lat: coords.latitude,
            lon: coords.longitude,
          });
          setIsBusy(false);
        },
        (error) => {
          setIsBusy(false);
          console.log(error);
          alert('Something went wrong getting your position!');
        },
        options
      );
    }
  };
  useEffect(() => {
    getUserCoordinates();
  }, []);

  const defaultProps = {
    center: {
      lat: lat,
      lng: lon,
    },
    zoom: 16,
  };

  //  tracking calculations
  const [directionResponse, setDirectionResponse] = useState<any>();
  const [distance, setDistance] = useState<string | undefined>('');
  const [duration, setDuration] = useState<string | undefined>('');

  const calculateDistance = async () => {
    const directionService = new google.maps.DirectionsService();
    const start = new google.maps.LatLng(lat, lon);
    const end = new google.maps.LatLng(cords.lat, cords.lng);
    const results = await directionService.route({
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.WALKING,
    });
    setDirectionResponse(results);
    setDistance(results.routes[0].legs[0].distance?.text);
    setDuration(results.routes[0].legs[0].duration?.text);
  };

  useEffect(() => {
    if (lat) calculateDistance();
  }, [lat]);

  // get coords and update every 10 seconds
  useEffect(() => {
    let interval = setInterval(getUserCoordinates, 10000);

    return () => {
      //we return a "cleanup" function that will be called on unmount, since we've set an interval we also need to clear it later.
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='relative w-full h-full'>
      {!lat ||
        (isBusy && (
          <div className='w-full h-full place-center'>
            <RadarLoading />
          </div>
        ))}
      {isLoaded && lat && (
        <GoogleMap
          center={defaultProps.center}
          zoom={defaultProps.zoom}
          options={{
            gestureHandling: 'greedy',
            streetViewControl: true,
          }}
          mapContainerStyle={{ width: '100%', height: '100%' }}
        >
          <Marker position={{ lat: cords.lat, lng: cords.lng }} />
          {directionResponse && (
            <DirectionsRenderer
              directions={directionResponse}
              options={{
                polylineOptions: {
                  strokeColor: 'blue',
                  strokeOpacity: 60,
                  strokeWeight: 5,
                },
                // suppressMarkers: true,
              }}
            />
          )}
        </GoogleMap>
      )}
      <div className='absolute grid gap-4 bottom-5 rounded-xl shadow-xl bg-white left-4 p-4 z-10'>
        <div className='flex items-center gap-x-4 '>
          <GiPathDistance className='text-2xl text-primary' />
          <p className='text-lg fw-500 text-primary'>{distance}</p>
        </div>
        <div className='flex items-center gap-x-4 '>
          <BsPersonWalking className='text-2xl text-primary' />
          <p className='text-lg fw-500 text-primary'>{duration}</p>
        </div>
        <div
          className='flex items-center gap-x-4 cursor-pointer'
          onClick={() => showView('location')}
        >
          <FaSatelliteDish className='text-2xl text-primary' />
          <p className='text-lg fw-500 text-primary'>
            Switch to satellite view
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayTracking;
