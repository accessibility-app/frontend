import { useParams } from "react-router-dom";
import { places } from "../lib/data/places";
import PlaceDetailsDisplay from "../lib/modules/details/place-details";
import PlaceMapIndex from "./place-map";

export const GOOGLE_API_KEY = `${import.meta.env.VITE_GOOGLE_KEY}`;
const PlaceDetails = () => {
  const { id } = useParams();
  const place = places.find((where) => where.id === `${id}`);
  return (
    <div className="flex lg:h-screen w-full">
      <div className="w-5/12 h-full">
        <PlaceDetailsDisplay data={place} />
      </div>
      <div className="w-7/12 h-full">
        <PlaceMapIndex cords={place?.coordinates} />
      </div>
    </div>
  );
};

export default PlaceDetails;
