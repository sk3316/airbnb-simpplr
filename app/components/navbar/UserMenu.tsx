"use client";

import { AiOutlineMenu } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
// import { RxAvatar } from "../Avatar";
import Image from "next/image";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItems";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import RegisterModal from "../modals/RegisterModal";

const UserMenu = () => {
    const registerModal = useRegisterModal();
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = useCallback(()=>{
        setIsOpen((value)=> !value);
    },[]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
        //   onClick={}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Airbnb Your Home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition border-[1px]"
        >
            <AiOutlineMenu/>
            <div className="hidden md:block">
                <RxAvatar>
                    <Image className="rounded-full" 
                    height={30}
                    width={30} 
                    alt="Avatar"
                    src="/images/placeholder.jpg"/>
                </RxAvatar>
            </div>
        </div>
      </div>
      {
        isOpen && (
            <div className="absolute rounded-xl shadow-md md:w-3/4 bg-white overflow-hidden right-0 top-12 w-[40vw] text-sm">
                <div className="flex flex-col cursor-pointer">
                    <>
                    <MenuItem onclick={() => {}}
                    label="Login"/>
                    <MenuItem onclick={registerModal.onOpen}
                    label="Sign Up"/>
                    </>
                </div>
            </div>

        )
      }
    </div>
  );
};

export default UserMenu;
