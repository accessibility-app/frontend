import { useParams } from "react-router-dom"
import { places } from "../lib/data/places"

const PlaceDetails = () => {
    const {id} = useParams()
    const place = places.find((where) => where.id === `${id}`)
  return (
    <div className="flex lg:h-screen w-full">
        <div className="w-5/12">

        </div>
        <div className="w-7/12">

        </div>
    </div>
  )
}

export default PlaceDetails