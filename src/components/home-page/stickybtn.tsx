import { url } from "inspector";
import Link from "next/link";
import Countdown from "./contdown";

const Numbers = [
    "tel:8460402761",
    "tel:8866076264",
    "tel:8799553196"
];

function getRandomIndex(array: string[]): number {
  return Math.floor(Math.random() * array.length);
} 
export default function StickyBtn() {
    return (
        <div className="w-full flex flex-col bg-[#D30000]">
            <div className="w-full flex flex-col px-3 py-3 fixed bottom-0 left-0 z-20 " 
            style={{
                backgroundColor: '#D30000',
                backdropFilter: 'blur(15px)',
                borderTop: '1px solid #0c0c0c'
            }}>
                <p className="text-white font-black text-xs w-full text-center mb-2">100% WINNING GUARANTEE NOW @ <span className="text-green-400">₹499</span> &nbsp; <span className="text-zinc-800 line-through">₹1999</span></p>
                <div className="flex w-full gap-2 items-center">
                    <Countdown />
                    <Link href={'/winnings'} className="w-full stickbtn uppercase">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
                            <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
                        </svg> */}
                        Book Rank Now 
                    </Link>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <p className="text-yellow-200 font-bold text-center">Only 18 Seats Left</p>
                    <p className="text-white font-bold animate-pulse text-center">BOOK FAST !</p>
                </div>
            </div>
        </div>
    )
}