import { useParams } from "react-router-dom"

const PlaceDetails = () => {
    const {id} = useParams()
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