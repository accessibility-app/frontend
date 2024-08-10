import logo from "../../assets/images/logo.png";

const AppLogo = () => {
  return (
    <div className="flex items-center text-white cursor-pointe">
      <img src={logo} alt="logo" className="w-12"/>
      <p className="text-xl syne lg:text-2xl fw-600">
        <span>Campus</span> <span>Compass</span>
      </p>
    </div>
  );
};

export default AppLogo;
