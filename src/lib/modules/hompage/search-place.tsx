import { useEffect, useRef, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { search } from '../../../utils/utils';
import { places } from '../../data/places';

const SearchPlace = () => {
  const navigate = useNavigate();
  const [showResult, setShowResult] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const [locations, setLocations] = useState(places.slice(0, 5));

  const handleClickOutside = (event: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      setShowResult(false);
    }
  };

  const handleSearch = (e: any) => {
    const response = search(e.target.value);
    setLocations(response);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className='relative z-20'>
      <div className='w-[250px] lg:w-[300px]'>
        <div
          className={`w-full flex items-center gap-x-2 bg-gray-300 px-2 lg:px-6 ${
            showResult ? 'rounded-t-full' : 'rounded-full'
          }`}
        >
          <FiSearch className='text-xl shrink-0' />
          <input
            type='search'
            placeholder='Search Locations'
            onFocus={() => setShowResult(true)}
            onChange={handleSearch}
            className='border-none outline-none bg-transparent p-2 w-full'
          />
        </div>
      </div>
      {showResult && (
        <div
          ref={divRef}
          className='w-[250px] lg:w-[300px] overflow-y-auto h-[300px] bg-gray-300 rounded-b-lg'
        >
          {locations.map((location) => (
            <div
              key={location.id}
              className='flex p-3 gap-2 hover:cursor-pointer hover:bg-[#2f2c2cce] hover:text-white'
              onClick={() => navigate(`/place/${location.id}`)}
            >
              <img src={location.picture} className='w-[20%] rounded-md' />
              <div className='flex flex-col'>
                <p>{location.name}</p>
                <div className='flex gap-2'>
                  <small>Lng: {location.coordinates.longitude}</small>
                  <small>Lat: {location.coordinates.latitude}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPlace;
