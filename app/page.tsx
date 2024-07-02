// import Image from "next/image";

import ClientOnly from "./components/ClientOnly";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listings/ListingCard";
import ListingCard2 from "./components/listings/ListingCard2";
import ListingCard3 from "./components/listings/ListingCard3";

export default function Home() {
  // const isEmpty = true;
  // if (isEmpty) {
  //   return(
  //     <ClientOnly>
  //       <EmptyState/>
  //     </ClientOnly>
  //   )
  // }
  return (
    // <div className="text-rose-500 text-2xl">Hello Airbnb</div>
    <ClientOnly>
      <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        <div className="pt-24 grid grid-cols-1 gap-8">
          <div>
            <ListingCard />
            <ListingCard2 />
            <ListingCard3 />
            {/* // key = {data.id}
// data = {listing} */}
          </div>
        </div>
      </div>
    </ClientOnly>
  );
}
