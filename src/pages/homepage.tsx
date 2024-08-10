import PlaceHeader from "../lib/modules/hompage/place-header"
import PlaceSwiper from "../lib/modules/hompage/place-swiper"
import SearchPlace from "../lib/modules/hompage/search-place";
import AppLogo from "../lib/ui/logo-comp"

const HomePage = () => {
  return (
    <div>
      <div className="h-screen w-full home-bg p-4">
        <div className="absolute top-5 left-4">
          <AppLogo />
        </div>
        <div className="absolute top-5 right-4">
          <SearchPlace />
        </div>
        <div className="h-full w-full flex items-center">
          <div className="block w-full">
            <PlaceHeader />
            <div>
              <PlaceSwiper />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage