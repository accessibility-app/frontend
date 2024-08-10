import { FC } from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import { GOOGLE_API_KEY } from "../../details";
import { FaDirections } from "react-icons/fa";

interface Props {
  cords: {
    lat: number;
    lng: number;
  };
  showView: React.Dispatch<React.SetStateAction<string>>
}
const DisplayLocation: FC<Props> = ({ cords, showView }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_API_KEY,
  });
  const defaultProps = {
    center: {
      lat: Number(cords.lat),
      lng: Number(cords.lng),
    },
    zoom: 19,
  };
  return (
    <div className="relative w-full h-full">
      {isLoaded && (
        <GoogleMap
          center={defaultProps.center}
          zoom={defaultProps.zoom}
          options={{
            gestureHandling: "greedy",
            streetViewControl: true,
            mapTypeId: "satellite",
          }}
          mapContainerStyle={{ width: "100%", height: "100%" }}
        >
          <Marker position={{ lat: cords.lat, lng: cords.lng }} />
        </GoogleMap>
      )}
      <div className="absolute flex items-center animate-bounce cursor-pointer gap-x-4 bottom-5 rounded-xl shadow-xl bg-white left-4 p-4 z-10" onClick={() => showView('tracking')}>
        <FaDirections className="text-2xl text-primary" />
        <p className="text-lg fw-500 text-primary">Direction</p>
      </div>
    </div>
  );
};

export default DisplayLocation;
