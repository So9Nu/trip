import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/hero";
import { PopularCityList } from "./_components/PopularCityList";

export default function Home() {
  return (
   <div>
    <Hero />
    <PopularCityList/>
   </div>
  );
}
