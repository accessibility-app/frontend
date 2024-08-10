import { FC } from 'react'

interface Props {
  cords: {
    latitude: number;
    longitude: number;
  } | undefined;
}
const  PlaceMapIndex:FC<Props> = ({}) => {
  return (
    <div>PlaceMapIndex</div>
  )
}

export default PlaceMapIndex