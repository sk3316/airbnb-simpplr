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

const ListingCard2 = () => {
  // interface ListingCard2Props{
  //     data: null;
  //     reservation?: null;
  //     onAction?:(id:string) => void;
  //     disabled?: boolean;
  //     actionLabel?: string;
  //     actionId?: string;
  //     currentUser?: null;
  // }

  // const ListingCard2 : React.FC<ListingCard2Props>= ({
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
    <div className=" col-span-1 flex flex-row group gap-5">
      <div className="cursor-pointer flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            alt="listing6"
            src="/images/image6.jpg"
            className="object-cover h-full w-full hover:scale-110 transition"
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
          // icon={FaEye}
          onClick={() =>("see")}
        />
      </div>
          <br></br>
      <div className="cursor-pointer flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            alt="listing7"
            src="/images/image7.webp"
            className="object-cover h-full w-full hover:scale-110 transition"
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
          // icon={FaEye}
          onClick={() =>("see")}
        />
      </div>
      <br></br>
      <div className="cursor-pointer flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            alt="listing8"
            src="/images/image8.jpg"
            className="object-cover h-full w-full hover:scale-110 transition"
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
          // icon={FaEye}
          onClick={() =>("see")}
        />
      </div>
      <br></br>
      <div className="cursor-pointer flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            alt="listing9"
            src="/images/image9.webp"
            className="object-cover h-full w-full hover:scale-110 transition"
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
          // icon={FaEye}
          onClick={() =>("see")}
        />
      </div>
      <br></br>
      <div className="cursor-pointer flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            alt="listing10"
            src="/images/image10.webp"
            className="object-cover h-full w-full hover:scale-110 transition"
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
          // icon={FaEye}
          onClick={() =>("see")}
        />
      </div>
    </div>
  );
};

export default ListingCard2;
