import "@/styles/globals.css";
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@/components/home-page/notification/notification.module.css'
import type { AppProps } from "next/app";

import { em, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Header } from "@/components/header/common";
import { Footer } from "@/components/footer/common";
import { useMediaQuery } from "@mantine/hooks";
import { ModalsProvider } from "@mantine/modals";


export default function App({ Component, pageProps }: AppProps) {
  const isMobile = useMediaQuery(`(max-width: ${em(600)})`);

  return (
    <MantineProvider>
      <ModalsProvider >
        <Header />
        <Notifications position={isMobile ? "top-right" : "bottom-right"} className="mt-[56px]" />
        <Component {...pageProps} />
        <Footer />
      </ModalsProvider>
    </MantineProvider>
  );
}
