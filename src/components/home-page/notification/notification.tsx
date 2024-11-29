'use client'
import React, { useEffect } from 'react';
import { rem, Image } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import classes from './notification.module.css';

const namesArray = [
  "Arjun Patel",
  "Rajesh Sharma",
  "Manoj Singh",
  "Nikhil Shah",
  "Aditya Verma",
  "Vikrant Choudhary",
  "Pranav Gupta",
  "Rohan Reddy",
  "Aryan Kumar",
  "Neeraj Thakur",
  "Sandeep Yadav",
  "Siddharth Mehra",
  "Ravi Malhotra",
  "Yuvraj Kapoor",
  "Anand Khanna",
  "Hemal Bakshi",
  "Svaraj Khanna",
  "Chandradhar Kashyap",
  "Anniruddha Haldar",
  "Samit Mallick"
];

const winnings = [
  "1.5 Crores",
  "2 Crores",
  "1 Crore",
  "80 Lakhs",
  "95 Lakhs",
];

function getRandomIndex(array: string[]): number {
  return Math.floor(Math.random() * array.length);
}


export default function Notification() {
    const notifIcon = <Image src={'./fav.png'} alt="icon" style={{ width: rem(40), borderRadius: '100%' }} />;

    useEffect(() => {
        // Function to show notification
        const showNotification = () => {
          notifications.show({
              title: namesArray[getRandomIndex(namesArray)] + ' won ' + winnings[getRandomIndex(winnings)] + ' 🔥🥳!',
              withCloseButton: false,
              message: 'Book your Rank and win amazing prizes too, only at Dream 11 Booking',
              icon: notifIcon,
              withBorder: true,
              classNames: classes
          });
      };

      // Function to set up the recursive timeout
      const setupTimeout = () => {
          // Generate a random delay between 5 and 10 seconds
          const randomDelay = Math.floor(Math.random() * 5000) + 10000;

          // Set a timeout to show the notification after the random delay
          setTimeout(() => {
              showNotification();
              setupTimeout(); // Call recursively to set up the next timeout
          }, randomDelay);
      };

      setupTimeout(); 

    }, []); // Empty dependency array ensures this runs once on mount

    return (null);
}
