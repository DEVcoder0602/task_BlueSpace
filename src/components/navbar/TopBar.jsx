import logo from "../../assets/LOGO.png";

const TopBar = () => {
  return (
    <header className="topbar sticky flex flex-row justify-between p-2 px-10 items-center">
      <div className="hamburger cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="20"
          viewBox="0 0 25 24"
          fill="none"
        >
          <rect width="25" height="1" rx="2" fill="#0052CC" />
          <rect y="10" width="25" height="1" rx="2" fill="#0052CC" />
          <rect y="20" width="25" height="1" rx="2" fill="#0052CC" />
        </svg>
      </div>
      <div className="logo cursor-pointer">
        <img src={logo} alt="logo" />
      </div>
      <div className="items ">
        <ul className="flex flex-row gap-10 text-2xl">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Portfolio</li>
        </ul>
      </div>
    </header>
  );
};

export default TopBar;
