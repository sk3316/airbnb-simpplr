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
  // onClick={()=> router.push(`/listings/${data}`)}

  return (
    <div className=" col-span-1 flex flex-row group gap-5">
      <div className="cursor-pointer flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            alt="listing1"
            src="/images/image1.webp"
            className="object-cover h-full w-full hover:scale-110 transition"
          />
          <div className="absolute top-3 right-3">
            <HeartButton />
          </div>
        </div>
        <div className="font-semibold text-lg">Paris, France</div>
        <div className="font-light text-neutral-500">Beach</div>
        <div className="flex flex-row items-center gap-">
          <div className="font-semibold">$500&nbsp;</div>
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
            alt="listing2"
            src="/images/image2.jpg"
            className="object-cover h-full w-full hover:scale-110 transition"
          />
          <div className="absolute top-3 right-3">
            <HeartButton />
          </div>
        </div>
        <div className="font-semibold text-lg">Kyoto, Japan</div>
        <div className="font-light text-neutral-500">Beach</div>
        <div className="flex flex-row items-center gap-">
          <div className="font-semibold">$700&nbsp;</div>
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
            alt="listing3"
            src="/images/image3.avif"
            className="object-cover h-full w-full hover:scale-110 transition"
          />
          <div className="absolute top-3 right-3">
            <HeartButton />
          </div>
        </div>
        <div className="font-semibold text-lg">Rome, Italy</div>
        <div className="font-light text-neutral-500">Windmills</div>
        <div className="flex flex-row items-center gap-">
          <div className="font-semibold">$200&nbsp;</div>
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
            alt="listing4"
            src="/images/image4.jpg"
            className="object-cover h-full w-full hover:scale-110 transition"
          />
          <div className="absolute top-3 right-3">
            <HeartButton />
          </div>
        </div>
        <div className="font-semibold text-lg">New York City, United States</div>
        <div className="font-light text-neutral-500">Modern</div>
        <div className="flex flex-row items-center gap-">
          <div className="font-semibold">$500&nbsp;</div>
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
            alt="listing5"
            src="/images/image5.webp"
            className="object-cover h-full w-full hover:scale-110 transition"
          />
          <div className="absolute top-3 right-3">
            <HeartButton />
          </div>
        </div>
        <div className="font-semibold text-lg">Cape Town, South Africa</div>
        <div className="font-light text-neutral-500">Lake</div>
        <div className="flex flex-row items-center gap-">
          <div className="font-semibold">$400&nbsp;</div>
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

export default ListingCard;
