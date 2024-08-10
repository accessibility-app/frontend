import logo from "../../assets/images/logo.png";

const AppLogo = () => {
  return (
    <div className="flex items-center text-white cursor-pointe">
      <img src={logo} alt="logo" className="w-12" />
      <p className="text-xl syne lg:text-2xl fw-600">
        <span className="syne text-pri fw-600">Campus</span>{" "}
        <span className="syne text-secondary fw-600">Compass</span>
      </p>
    </div>
  );
};

export default AppLogo;
