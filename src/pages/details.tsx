import { useNavigate, useParams } from "react-router-dom";
import { places } from "../lib/data/places";
import PlaceDetailsDisplay from "../lib/modules/details/place-details";
import PlaceMapIndex from "./place-map";
import { FiChevronLeft } from "react-icons/fi";

export const GOOGLE_API_KEY = `${import.meta.env.VITE_GOOGLE_KEY}`;
const PlaceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const place = places.find((where) => where.id === `${id}`);

  return (
    <div className="lg:flex flex-row-reverse relative lg:h-screen w-full">
      <div
        className="w-12 h-12 border border-gray-500 cursor-pointer place-center circle absolute z-10 bg-white top-3 left-2"
        onClick={() => navigate("/")}
      >
        <FiChevronLeft className="text-2xl text-gray-500" />
      </div>
      <div className="lg:w-7/12 h-[80vh] lg:h-full">
        <PlaceMapIndex cords={place?.coordinates} />
      </div>
      <div className="lg:w-5/12 h-[20vh] lg:h-full">
        <PlaceDetailsDisplay data={place} />
      </div>
    </div>
  );
};

export default PlaceDetails;
