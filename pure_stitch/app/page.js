'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Image from "next/image";
import Recommendations from "./components/recommendations/recommendations";
import NewArrivals from "./components/new_arrivals/new_arrivals";
import styles from './styles/main.module.scss'
import Navbar from "./components/navbar/navbar";
import Bottombar from "./components/bottombar/bottombar";

export default function Home() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <section className="relative">
      <Navbar/>
      <div className={`${styles.arrivals} flex items-center py-1 scroll justify-evenly`}>
      <NewArrivals/>
      </div>
      <Recommendations/>        
      <Bottombar/>
    </section>
    {/* <ReactQueryDevtools/> */}
    </QueryClientProvider>
  );
}
