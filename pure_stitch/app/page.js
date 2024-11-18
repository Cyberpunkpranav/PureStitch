import Image from "next/image";
import Recommendations from "./components/recommendations/recommendations";
import NewArrivals from "./components/new_arrivals/new_arrivals";
import styles from './styles/main.module.scss'
import Navbar from "./components/navbar/navbar";

export default function Home() {
  return (
    <section className="relative">
      <Navbar/>
      <div className={`${styles.arrivals} flex items-center py-1 scroll justify-evenly`}>
      <NewArrivals/>
      </div>
      <Recommendations/>
    </section>
  );
}
