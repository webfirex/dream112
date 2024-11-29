// import Image from "next/image";
import { Inter } from "next/font/google";
import Notification from '@/components/home-page/notification/notification'
import Particles from "@/components/magicUI/particles";
import Hero from "@/components/home-page/hero";
import UserReviews from "@/components/home-page/marquee";
import { CardsCarousel } from "@/components/home-page/carousel";
import { MantineProvider } from "@mantine/core";
import StickyBtn from "@/components/home-page/stickybtn";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Numbers = [
  "tel:8460402761",
  "tel:8866076264",
  "tel:8799553196"
];

function getRandomIndex(array: string[]): number {
  return Math.floor(Math.random() * array.length);
} 

export default function Home() {

  return (
    <main className={`flex relative min-h-screen flex-col items-center justify-between w-full max-[600px]:pt-[20px] pt-[30px] ${inter.className}`}>
      <Particles
        className="absolute inset-0 max-[700px]:hidden"
        quantity={200}
        ease={80}
        color={'#000'}
        refresh
      />
      { <Notification />}
      <Link href={Numbers[getRandomIndex(Numbers)]} className='min-[600px]:left-5 bottom-5 fixed max-[600px]:bottom-24 max-[600px]:hidden z-20'>
        <img src='callbtn.png' alt="telegram banner" className=" w-[65px]" />
      </Link>
      <Hero />
      <UserReviews />
      <MantineProvider>
        <CardsCarousel />
      </MantineProvider>
      <StickyBtn />
    </main>
  );
}
