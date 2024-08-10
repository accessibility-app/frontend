import { FC, useState } from "react";
import DisplayLocation from "./display-location";
import DisplayTracking from "./display-tracking";

interface Props {
  cords:
    | {
        latitude: number;
        longitude: number;
      }
    | undefined;
}
const PlaceMapIndex: FC<Props> = ({ cords }) => {
  const [showState, setShowState] = useState("location");
  const cord = {
    lat: cords?.longitude || 0,
    lng: cords?.latitude || 0,
  };
  return (
    <div className="w-full h-full">
      {showState === "location" && <DisplayLocation cords={cord}/>}
      {showState === "tracking" && <DisplayTracking />}
    </div>
  );
};

export default PlaceMapIndex;
