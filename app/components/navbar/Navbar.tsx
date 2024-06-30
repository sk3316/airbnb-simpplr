// import { Container } from "postcss";
"use client";
import Categories from "./Categories";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar: React.FC = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        {/* container = <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4"></div> */}
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo/>
            <Search/>
            <UserMenu/>
          </div>
        </div>
      </div>
      <Categories/>
    </div>
  );
};

export default Navbar;
