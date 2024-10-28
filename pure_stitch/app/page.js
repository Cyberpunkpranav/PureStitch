import Image from "next/image";
import { updates as data ,recommendation } from "./data";
import Bottombar from "./components/bottombar/bottombar";
import Recommendations from "./components/recommendations/recommendations";
import NewArrivals from "./components/new_arrivals/new_arrivals";

export default function Home() {
  return (
    <section className="relative">
      <div className="flex items-center justify-evenly p-2">
  
      <div className="flex items-center scroll gap-2">
      <div className="text-center">
          <div className="logo">
          <Image height={100} width={100} src='/images/logo.png'/>
          </div>
      <small>Pure Stitch</small>
      </div>
      <NewArrivals/>
      </div>
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
