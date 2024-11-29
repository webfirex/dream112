import { Container, Group, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './header.module.css';
import Link from 'next/link';
import ShimmerButton from '../magicUI/shimmer-button';

const links = [
  // { link: '/about', label: 'Features' },
  // { link: '/pricing', label: 'Pricing' },
  // { link: '/learn', label: 'Learn' },
  { link: 'https://t.me/+5g_UApTSafViYmU1', label: 'Join Community' },
];


const Numbers = [
  "tel:8460402761",
  "tel:8866076264",
  "tel:8799553196"
];

function getRandomIndex(array: string[]): number {
  return Math.floor(Math.random() * array.length);
} 

export function Header() {
  // const [opened, { toggle }] = useDisclosure(false);
  // const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      // data-active={active === link.link || undefined}
      // onClick={(event) => {
      //   event.preventDefault();
      //   setActive(link.link);
      // }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="lg" className={classes.inner}>
        <Link href={'https://dream11booking.com'}>
          <Image src={'h-logo.png'} alt='logo' w={'150px'} />
        </Link>
        <Group gap={5} visibleFrom="xs" className=' !hidden'>
          {items}
          <Link href={Numbers[getRandomIndex(Numbers)]}>
          <ShimmerButton className="shadow-2xl" background='#fff'>
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-black">
              Book 1st Rank
            </span>
          </ShimmerButton>
          </Link>
        </Group>

        {/* <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" /> */}
        <Link href={Numbers[getRandomIndex(Numbers)]} className=''>
          {/* <ShimmerButton className="shadow-2xl" background='#fff'>
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-black">
              Book 1st Rank
            </span>
          </ShimmerButton> */}
          <Image src={'callbtn2.png'} alt='logo' w={'100px'} className=' animate-scaleBtn' />
        </Link>
      </Container>
    </header>
  );
}