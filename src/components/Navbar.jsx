import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-5 sm:px-10 py-5 w-full">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple Logo" width={14} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              className="px-5 text-gray text-sm hover:text-white transition-all cursor-pointer"
              key={nav}
            >
              {nav}
            </div>
          ))}
        </div>
        <div className="flex max-sm:flex-1 max-sm:justify-end items-baseline space-x-7 max-sm:space-x-5 max-sm:mx-5">
          <img src={searchImg} alt="Search" width={18} height={18} />
          <img src={bagImg} alt="Bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
// Wrong styling for the navbar icons(missing space-x):
// flex max-sm:flex-1 max-sm:justify-end items-baseline gap-7
