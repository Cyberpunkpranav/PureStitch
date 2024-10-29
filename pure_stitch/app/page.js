import Image from "next/image";
import { updates as data ,recommendation } from "./data";
import Bottombar from "./components/bottombar/bottombar";
import Recommendations from "./components/recommendations/recommendations";
import NewArrivals from "./components/new_arrivals/new_arrivals";

export default function Home() {
  return (
    <section className="relative">
      <div style={{boxShadow:"0 4px 2px -2px rgba(0, 0, 0, 0.2); "}} className="py-1 sticky top-0 bg-gray flex text-center items-center justify-between px-4 border-b-charcoal">
      <div className="flex items-center">      
      <Image className="logo" height={100} width={100} src='/images/logo.svg'/>
      {/* <h2>Pure Stitch</h2> */}
      </div>
      <div>
        <Image height={100} width={100} className="icon" unoptimized={true} src='/icons/wishlist.svg'/>
      </div>
      </div>
      <div className="flex items-center gap-2 mt-3 scroll justify-evenly">
      <NewArrivals/>
      </div>
      <div className="gap-4 flex flex-col mt-2">
      {
        recommendation.map((data)=>(
          <Recommendations data={data}/>
        ))
      }
      </div>
    </section>
  );
}
