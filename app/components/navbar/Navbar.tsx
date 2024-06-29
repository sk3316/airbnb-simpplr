// import { Container } from "postcss";

import Logo from "./Logo";

const Navbar: React.FC = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        {/* container = <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4"></div> */}
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
