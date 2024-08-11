const PlaceHeader = () => {
  return (
    <div className='text-center text-white mb-6 lg:mb-12 mt-24 md:mt-36 lg:mt-0'>
      <p className='text-2xl syne lg:text-5xl fw-700 lg:w-10/12 mx-auto'>
        Your Ultimate Guide to the School of Computing, Robert Gordon
        University's Spaces
      </p>
      <p className='lg:w-9/12 mx-auto mt-3'>
        Navigating the sprawling university campus has never been easier!{' '}
        <span className='hidden lg:inline'>
          With SOC Compass, you can effortlessly find your way to study halls,
          libraries, and other essential campus locations.
        </span>{' '}
      </p>
    </div>
  );
};

export default PlaceHeader;
