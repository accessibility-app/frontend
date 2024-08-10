import { FC } from 'react'

interface Props {
  data: {
    id: string;
    name: string;
    picture: any;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  } | undefined;
}
const PlaceDetailsDisplay:FC<Props> = ({}) => {
  return (
    <div>
        <div></div>
    </div>
  )
}

export default PlaceDetailsDisplay