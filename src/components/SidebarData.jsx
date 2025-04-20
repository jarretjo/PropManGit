/* An array of Objects and each object will contain 3 properties: Title, Icon and Link to where you want to go */
import React from "react";
import { CiHome } from "react-icons/ci";
import { IoHomeSharp } from "react-icons/io5";
import { GrUserAdd } from "react-icons/gr";
import { DiReact } from "react-icons/di";

export const SidebarData = [
  {
    title: "Home",
    icon: <CiHome />,
    link: "/home",
  },
  {
    title: "View Payments",
    icon: <IoHomeSharp />,
    link: "/viewpayments",
  },
  {
    title: "View Flats",
    icon: <DiReact />,
    link: "/viewflats",
  },
  {
    title: "Add a Payment",
    icon: <GrUserAdd />,
    link: "/addpayment",
  },
  {
    title: "Add an Owner",
    icon: <GrUserAdd />,
    link: "/addowner",
  },
  {
    title: "Add a Flat",
    icon: <GrUserAdd />,
    link: "/addflat",
  },
  {
    title: "Add a Block",
    icon: <GrUserAdd />,
    link: "/addblock",
  },
  {
    title: "Create Service Charge Email",
    icon: <GrUserAdd />,
    link: "/sendEmail",
  },
];
