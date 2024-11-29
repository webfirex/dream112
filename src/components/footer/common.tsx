import { Text, Container, ActionIcon, Group, rem, Image } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import classes from './footer.module.css';
import Link from 'next/link';

const data = [
  {
    title: 'About',
    links: [
      { label: 'Booking', link: 'https://superprofile.bio/vig/6695f7d7913bf0001347ec4c' },
      { label: 'Support', link: 'https://t.me/+5g_UApTSafViYmU1' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Join Telegram', link: 'https://t.me/+5g_UApTSafViYmU1' },
      { label: 'Join Whatsapp', link: 'https://api.whatsapp.com/send?phone=917016823005&text=Hey%2C%20I%20want%20to%20Book%20and%20Win%201st%20Rank%20from%20Dream%2011%20Booking' },
      { label: '+91 8460402761', link: 'tel:+918460402761' },
      { label: '+91 8866076264', link: 'tel:+918866076264' },
    ],
  },
];

export function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link} 
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
        <Link href={'https://dream11booking.com'}>
          <Image src={'h-logo.png'} alt='logo' w={'150px'} />
        </Link>
          <Text size="xs" c="white" className={classes.description}>
            Team / Rank booking services, Book Now and Win Crores only at Dream 11 Booking
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="white" size="sm" className='w-full text-center'>
          © 2024 Dream 11 Corp. All rights reserved.
        </Text>
      </Container>
    </footer>
  );
}