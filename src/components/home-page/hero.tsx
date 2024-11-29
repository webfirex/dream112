import { Container, Flex, Image } from "@mantine/core";
import GradualSpacing from "../magicUI/gradual-spacing";
import SparklesText from "../magicUI/sparkles-text";
import ShimmerButton from "../magicUI/shimmer-button";
import AvatarCircles from "../magicUI/avatar-circles";
import AnimatedShinyText from "../magicUI/animated-shiny-text";
import Link from "next/link";
import WordRotate from "../magicUI/word-rotate";

const Numbers = [
  "tel:8460402761",
  "tel:8866076264",
  "tel:8799553196"
];

function getRandomIndex(array: string[]): number {
  return Math.floor(Math.random() * array.length);
}

export default function Hero() {
    return (
        <div className="relative w-full z-10">
            <Container size={"lg"}>
                <Flex direction={'column'} gap={'md'} align={'center'}>
                    <div className="flex justify-center items-center h-[60px]">
                      <WordRotate
                        className="text-2xl max-[600px]:text-xl max-[600px]:font-regular font-bold text-[#d80000]"
                        words={["Call Now +91 8460402761", "Call Now +91 8866076264"]}
                      />
                    </div>
                    <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out text-neutral-600 hover:duration-300">
                      <span className=" max-[600px]:text-xs">✨ Book 1st Rank</span>
                    </AnimatedShinyText>
                    <Flex direction={'column'} gap={'xs'} px={'xs'}>
                        <GradualSpacing
                          className="font-display text-center text-2xl font-bold tracking-[-0.1em] text-black md:text-5xl min-[600px]:leading-[3rem] leading-[1rem]"
                          text="Book your 1st Rank now "
                        />
                        <Flex gap={"sm"} justify={'center'}>
                            <GradualSpacing
                              className="font-display text-center text-2xl font-bold tracking-[-0.1em] text-black md:text-5xl min-[600px]:leading-[3rem]"
                              text="& win"
                            />
                            <SparklesText text="Crores" className="md:text-5xl text-2xl text-[#d80000]" colors={{first: '#d80000', second: '#ff9800'}} sparklesCount={5} />
                        </Flex>
                    </Flex>
                    <p className="opacity-65 text-center text-md font-light max-w-[650px] max-[600px]:text-xs">Dream11Booking.com is a subsidiary & Secret website of Dream11. 💯 Winning Team Available. Book Your Rank from below button and win crores guaranteed.</p>
                    {/* <p className="text-center">+91 7016432821 / +91 9870026957 </p> */}
                    {/* <iframe width="560" height="315" className="w-full h-auto aspect-video max-w-[700px]" src="https://www.youtube.com/embed/EnMr5NscBhg?si=TqLRvoSo-fWBEf2y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
                    <video src="/newsvid.mp4" autoPlay controls className="w-full h-auto aspect-video max-w-[700px] border-4 border-zinc-800 rounded-md"></video>
                    <Flex gap={'md'} direction={'column'} justify={'center'} align={'center'}>
                        <Flex gap={'sm'} direction={'column'} className="w-full justify-center items-center">
                          <Flex gap={"sm"} align={"center"} className="w-full min-[600px]:flex-col">
                            {/* <Link className="w-full stickbtn2 min-[600px]:max-w-[400px] h-auto flex justify-center items-center" href='https://t.me/+5g_UApTSafViYmU1'>
                              <img src="tgbtn.png" alt="button" className="w-auto h-16 " />
                            </Link> */}
                            <Link href={Numbers[getRandomIndex(Numbers)]} className="w-full stickbtn max-[600px]:hidden animate-scaleBtn">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
                                    <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
                                </svg>
                                Book 1st Rank 🥳 
                            </Link>
                            {/* <Link className="rounded-full flex justify-center items-center" href={Numbers[getRandomIndex(Numbers)]}>
                              <ShimmerButton className="shadow-2xl flex justify-center align-center w-full border px-3 border-black" background=''>
                                <span className="whitespace-pre-wrap text-center text-nowrap w-full max-[600px]:text-md text-lg font-medium leading-none tracking-tight text-black">
                                  📞
                                </span>
                              </ShimmerButton>
                            </Link> */}
                          </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
        </div>
    )
}