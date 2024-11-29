import { cn } from "@/lib/utils";
import Marquee from "../magicUI/marquee";
import { Container } from "@mantine/core";

const reviews = [
  {
    name: "Rajesh Singh",
    username: "@winner",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatars.githubusercontent.com/u/16860528",
  },
  {
    name: "Manoj Srivastav",
    username: "@winner",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatars.githubusercontent.com/u/29210732",
  },
  {
    name: "Vikrant Gupta",
    username: "@winner",
    body: "One of the best company for booking winning ranks",
    img: "https://avatars.githubusercontent.com/u/29210732",
  },
  {
    name: "Ravi Melhotra",
    username: "@winner",
    body: "I won 1.5 crores with Dream 11 Booking, Thanks Guys",
    img: "https://avatars.githubusercontent.com/u/109150200",
  },
  {
    name: "Anand Khanna",
    username: "@winner",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatars.githubusercontent.com/u/35302658",
  },
  {
    name: "Animesh Thakur",
    username: "@winner",
    body: "Won 15 Lakhs just in 1 day, it changed my life",
    img: "https://avatars.githubusercontent.com/u/8742002",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium ">
            {name}
          </figcaption>
          <p className="text-xs font-medium ">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function UserReviews() {
  return (
    <Container size={"lg"} className="w-full max-w-[100vw] overflow-hidden">
        <div className="relative flex h-full w-full max-w-[100vw] flex-col items-center justify-center overflow-hidden rounded-lg bg-background pb-20 pt-5 min-[600px]:pt-20">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white max-[700px]:hidden"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white max-[700px]:hidden"></div>
        </div>
    </Container>
  );
};

