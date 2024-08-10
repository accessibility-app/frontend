import { FC } from "react";

interface Props {
  data:
    | {
        id: string;
        name: string;
        picture: any;
        coordinates: {
          latitude: number;
          longitude: number;
        };
      }
    | undefined;
}
const PlaceDetailsDisplay: FC<Props> = ({ data }) => {
  return (
    <div className="h-full">
      <div className="hidden lg:block h-[80vh]">
        <img
          src={data?.picture}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="h-[20vh] p-3 bg-pri">
        <p className="text-xl fw-500">{data?.name}</p>
        <p className="flex gap-x-2 mt-3">
          <span>Latitude:</span>
          <span className="fw-500">{data?.coordinates?.longitude}</span>
        </p>
        <p className="flex gap-x-2 mt-1">
          <span>Longitude:</span>
          <span className="fw-500">{data?.coordinates?.latitude}</span>
        </p>
      </div>
    </div>
  );
};

export default PlaceDetailsDisplay;
