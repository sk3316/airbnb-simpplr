"use client";

import useCountries from "@/app/hooks/useCountries";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import { format } from "date-fns";
import Image from "next/image";
import HeartButton from "../HearButton";
import Button from "../Button";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaEye } from "react-icons/fa";

const ListingCard = () => {
  // interface ListingCardProps{
  //     data: null;
  //     reservation?: null;
  //     onAction?:(id:string) => void;
  //     disabled?: boolean;
  //     actionLabel?: string;
  //     actionId?: string;
  //     currentUser?: null;
  // }

  // const ListingCard : React.FC<ListingCardProps>= ({
  //     data,
  //     reservation,
  //     onAction,
  //     disabled,
  //     actionLabel,
  //     actionId = " ",
  //     currentUser
  // }) => {
  //     const router = useRouter();
  //     const {getByValue} = useCountries();

  //     // const location = getByValue(data.location);

  //     const handleCancel = useCallback(
  //         (e: React.MouseEvent<HTMLButtonElement>) => {
  //         e.stopPropagation();

  //         if (disabled) {
  //           return;
  //         }

  //         onAction?.(actionId)
  //       }, [disabled, onAction, actionId]);

  //       const price = useMemo(() => {
  //         if (reservation) {
  //           return null;
  //         }

  //         return null;
  //       }, [reservation, null]);

  //       const reservationDate = useMemo(() => {
  //         if (!reservation) {
  //           return null;
  //         }

  //         const start = new Date(reservation);
  //         const end = new Date(reservation);
  //         return `${format(start, 'PP')} - ${format(end, 'PP')}`;
  //     }, [reservation]);

  return (
    <div
      // onClick={()=> router.push(`/listings/${data}`)}
      className=" cursor-pointer group flex  flex-col"
    >
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            alt="listing"
            src="/images/logo.png"
            className="object-cover h-full w-full group-hover:scale-110 transition"
          />
          <div className="absolute top-3 right-3">
            <HeartButton />
          </div>
        </div>
        <div className="font-semibold text-lg">Europe, Croatia</div>
        <div className="font-light text-neutral-500">Beach</div>
        <div className="flex flex-row items-center gap-">
          <div className="font-semibold">$500</div>
          <div className="font-light">night</div>
        </div>
        <Button
          outline
          label="See Property"
          icon={FaEye}
          onClick={() =>("see")}
        />

        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            alt="listing"
            src="/images/logo.png"
            className="object-cover h-full w-full group-hover:scale-110 transition"
          />
          <div className="absolute top-3 right-3">
            <HeartButton />
          </div>
        </div>
        <div className="font-semibold text-lg">Europe, Croatia</div>
        <div className="font-light text-neutral-500">Beach</div>
        <div className="flex flex-row items-center gap-">
          <div className="font-semibold">$500</div>
          <div className="font-light">night</div>
        </div>
        <Button
          outline
          label="See Property"
          icon={FaEye}
          onClick={() =>("see")}
        />
      </div>
    </div>
  );
};

export default ListingCard;
