// src/components/MyAppBar.js
"use client"; 
import React from "react"; 
import { usePathname } from "next/navigation"; 
import { ShellBar, ListItemStandard, Avatar, Input,} from "@ui5/webcomponents-react";
import sapIcon from "../assets/sap.svg";
import person from "../assets/person.png";
import Image from "next/image";
import Link from "next/link"; 

const MyAppBar = () => {
  const pathname = usePathname(); 

  // Determine the title based on the current pathname
  const getTitle = () => {
    switch (pathname) {
      case "/":
        return "Home"; 
      case "/items":
        return "Items"; 
      default:
        return "Shell Bar";
    }
  };

  return (
    <ShellBar
    style={{border: '1px solid #000'}}
      logo={<Image src={sapIcon} alt="SAP Logo" width={100} height={50} />}
      menuItems={
        <>
          <Link href="/" passHref>
            <ListItemStandard data-key="1">Home</ListItemStandard>
          </Link>
          <Link href="/items" passHref>
            <ListItemStandard data-key="2">Items</ListItemStandard>
          </Link>
        </>
      }
      onLogoClick={() => console.log("Logo clicked")}
      onNotificationsClick={() => console.log("Notifications clicked")}
      onProfileClick={() => console.log("Profile clicked")}
      primaryTitle={getTitle()} // Set title based on the current pathname
      profile={
        <Avatar>
          <Image src={person} alt="User Avatar" width={40} height={40} />
        </Avatar>
      }
      searchField={<Input   placeholder="Search" />}
      showNotifications
    >
      {/* Additional ShellBar items can go here */}
    </ShellBar>
  );
};

export default MyAppBar;
