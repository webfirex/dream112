// import Image from "next/image";
import { Inter } from "next/font/google";
import Notification from '@/components/home-page/notification/notification'
import Particles from "@/components/magicUI/particles";
import Hero from "@/components/home-page/hero";
import UserReviews from "@/components/home-page/marquee";
import { CardsCarousel } from "@/components/home-page/carousel";
import { Container, Flex, MantineProvider } from "@mantine/core";
import StickyBtn from "@/components/home-page/stickybtn";
import Link from "next/link";
import { HomeWinnerComp } from "@/components/home-page/winner";

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
      {/* { <Notification />} */}
      <Link href={Numbers[getRandomIndex(Numbers)]} className='min-[600px]:left-5 bottom-5 fixed max-[600px]:bottom-24 max-[600px]:hidden z-20'>
        <img src='callbtn.png' alt="telegram banner" className=" w-[65px]" />
      </Link>
      <div className="relative w-full z-10">
          <Container size={"lg"}>
              <Flex direction={'column'} gap={'md'} align={'center'}>
                  <video src="/newsvid.mp4" autoPlay controls className="w-full h-auto aspect-video max-w-[700px]"></video>
                  <Flex gap={'md'} direction={'column'} justify={'center'} align={'center'}>
                      <Flex gap={'sm'} direction={'column'} className="w-full justify-center items-center">
                            <Link href={Numbers[getRandomIndex(Numbers)]} className="w-full stickbtn !hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
                                    <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
                                </svg>
                                Book 1st Rank 🥳 
                            </Link>
                      </Flex>
                  </Flex>
              </Flex>
          </Container>
      </div>
      <HomeWinnerComp />
      <Flex gap={'sm'} direction={'column'} className="w-full justify-center items-center px-5 py-4">
            <Link href={'https://telegram.me/+jzcyEE8ldk8zNzk1'} className="w-full flex justify-center items-center">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
                    <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
                </svg>
                Book 1st Rank 🥳  */}
                <img src={'jointgbtn.png'} alt='logo' className=' animate-move w-[200px]' />
            </Link>
      </Flex>
      <UserReviews />
      <MantineProvider>
        <CardsCarousel />
      </MantineProvider>
      {/* <StickyBtn /> */}
    </main>
  );
}
