import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, Button, useMantineTheme, rem, Container, Image } from '@mantine/core';
import classes from './CardsCarousel.module.css';
import '@mantine/carousel/styles.css';

interface CardProps {
    image: string;
}

function Card({ image }: CardProps) {
  return (
    <Paper
      shadow="md"
      radius="md"
      className={classes.card}
    >
      <Image src={image} alt='' className='rounded-lg border w-full max-w-[700px]' />
    </Paper>
  );
}

const data = [
  {
    image: 'https://imagetolink.com/ib/uZjBfxoRU0.png'
  },
  {
    image: 'https://imagetolink.com/ib/rsLZUNPMBX.png'
  },
  {
    image: 'https://imagetolink.com/ib/AMcZrLR7qs.png'
  },
  {
    image: 'https://imagetolink.com/ib/mSgJC40q77.png'
  },
  {
    image: 'https://imagetolink.com/ib/AceZY1glUJ.png'
  },
];

export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item, index) => (
    <Carousel.Slide key={index} className='max-w-[300px]'> 
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Container size={'lg'}>
        <Carousel
        slideSize={{ base: '50%', sm: '50%' }} slideGap="md" controlsOffset="xs" controlSize={20} loop>
          {slides}
        </Carousel>
    </Container>
  );
}