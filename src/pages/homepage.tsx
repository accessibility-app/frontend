import PlaceSwiper from "../lib/modules/hompage/place-swiper"
import AppLogo from "../lib/ui/logo-comp"

const HomePage = () => {
  return (
    <div>
        <div className='h-screen w-full home-bg p-4'>
            <div className="absolute top-5 left-4">
                <AppLogo/>
            </div>
            <div>
                
                <PlaceSwiper/>
            </div>
        </div>
    </div>
  )
}

export default HomePage