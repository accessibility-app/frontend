import { FC } from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import { GOOGLE_API_KEY } from "../../details";

interface Props {
  cords: {
    lat: number;
    lng: number;
  };
}
const DisplayLocation: FC<Props> = ({ cords }) => {
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
    <div className="w-full h-screen">
      {isLoaded && (
        <GoogleMap
          center={defaultProps.center}
          zoom={defaultProps.zoom}
          options={{
            gestureHandling: "greedy",
            streetViewControl: true,
          }}
          mapContainerStyle={{ width: "100%", height: "100%" }}
        >
          <Marker position={{ lat: cords.lat, lng: cords.lng}} />
        </GoogleMap>
      )}
    </div>
  );
};

export default DisplayLocation;
