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

const ListingCard3 = () => {
  // interface ListingCard3Props{
  //     data: null;
  //     reservation?: null;
  //     onAction?:(id:string) => void;
  //     disabled?: boolean;
  //     actionLabel?: string;
  //     actionId?: string;
  //     currentUser?: null;
  // }

  // const ListingCard3 : React.FC<ListingCard3Props>= ({
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
  // onClick={()=> router.push(`/listings/${data}`)}

  return (
    <div className="col-span-1 flex flex-row group gap-5">
      <div className="cursor-pointer flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            alt="listing11"
            src="/images/image11.webp"
            className="object-cover h-full w-full hover:scale-110 transition"
          />
          <div className="absolute top-3 right-3">
            <HeartButton />
          </div>
        </div>
        <div className="font-semibold text-lg">Dubai, United Arab Emirates</div>
        <div className="font-light text-neutral-500">Skiing</div>
        <div className="flex flex-row items-center gap-">
          <div className="font-semibold">$350&nbsp;</div>
          <div className="font-light">night</div>
        </div>
        <Button
          outline
          label="See Property"
          // icon={FaEye}
          onClick={() =>("see")}
        />
      </div>
          <br></br>
      <div className="cursor-pointer flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            alt="listing12"
            src="/images/image12.jpg"
            className="object-cover h-full w-full hover:scale-110 transition"
          />
          <div className="absolute top-3 right-3">
            <HeartButton />
          </div>
        </div>
        <div className="font-semibold text-lg">Amsterdam - Netherlands</div>
        <div className="font-light text-neutral-500">Dessert</div>
        <div className="flex flex-row items-center gap-">
          <div className="font-semibold">$250&nbsp;</div>
          <div className="font-light">night</div>
        </div>
        <Button
          outline
          label="See Property"
          // icon={FaEye}
          onClick={() =>("see")}
        />
      </div>
      <br></br>
      <div className="cursor-pointer flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            alt="listing13"
            src="/images/image13.jpg"
            className="object-cover h-full w-full hover:scale-110 transition"
          />
          <div className="absolute top-3 right-3">
            <HeartButton />
          </div>
        </div>
        <div className="font-semibold text-lg">Cairo, Egypt</div>
        <div className="font-light text-neutral-500">luxury</div>
        <div className="flex flex-row items-center gap-">
          <div className="font-semibold">$2500&nbsp;</div>
          <div className="font-light">night</div>
        </div>
        <Button
          outline
          label="See Property"
          // icon={FaEye}
          onClick={() =>("see")}
        />
      </div>
      <br></br>
      <div className="cursor-pointer flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            alt="listing14"
            src="/images/image14.jpg"
            className="object-cover h-full w-full hover:scale-110 transition"
          />
          <div className="absolute top-3 right-3">
            <HeartButton />
          </div>
        </div>
        <div className="font-semibold text-lg">Marrakech, Morocco</div>
        <div className="font-light text-neutral-500">Caves</div>
        <div className="flex flex-row items-center gap-">
          <div className="font-semibold">$650&nbsp;</div>
          <div className="font-light">night</div>
        </div>
        <Button
          outline
          label="See Property"
          // icon={FaEye}
          onClick={() =>("see")}
        />
      </div>
      <br></br>
      <div className="cursor-pointer flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            alt="listing15"
            src="/images/image15.webp"
            className="object-cover h-full w-full hover:scale-110 transition"
          />
          <div className="absolute top-3 right-3">
            <HeartButton />
          </div>
        </div>
        <div className="font-semibold text-lg">Toronto, Canada</div>
        <div className="font-light text-neutral-500">Camping</div>
        <div className="flex flex-row items-center gap-">
          <div className="font-semibold">$550&nbsp;</div>
          <div className="font-light">night</div>
        </div>
        <Button
          outline
          label="See Property"
          // icon={FaEye}
          onClick={() =>("see")}
        />
      </div>
    </div>
  );
};

export default ListingCard3;
