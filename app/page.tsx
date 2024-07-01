// import Image from "next/image";

import ClientOnly from "./components/ClientOnly";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listings/ListingCard";



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
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          <div>
            <ListingCard/>
{/* // key = {data.id}
// data = {listing} */}
          </div>
        </div>
      </div>
    </ClientOnly>
  );
}
