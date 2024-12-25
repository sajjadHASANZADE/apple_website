import { appleImg, bagImg, searchImg } from "../utils";
const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-5 sm:px-10 py-5 w-full">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple Logo" width={14} height={18} />
        <div>
          {["Phones", "MacBooks", "Tablets"].map((nav) => (
            <div key={nav}>{nav}</div>
          ))}
        </div>
        <div>
          <img src={searchImg} alt="Search" width={18} height={18} />
        </div>
        <div>
          <img src={bagImg} alt="Bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
