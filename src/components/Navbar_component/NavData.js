import React from "react";

// import * as FaIcons from "react-icons/fa";
// import * as IoIcons from "react-icons/io";

import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as BsIcons from "react-icons/bs";


export const NavData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "List",
    path: "/cardlist",
    icon: <AiIcons.AiOutlineOrderedList />,
    cName: "nav-text"
  },
  {
    title: "One spread",
    path: "/onespread",
    icon: <GiIcons.GiCardAceDiamonds />,
    cName: "nav-text"
  },
  {
    title: "Three spread",
    path: "/threespread",
    icon: <GiIcons.GiCard3Diamonds />,
    cName: "nav-text"
  },
  {
    title: "Horoscope",
    path: "/horoscope",
    icon: <BsIcons.BsFillMoonStarsFill />,
    cName: "nav-text"
  },
  {
    title: "Credits",
    path: "/credits",
    icon: <AiIcons.AiFillSmile />,
    cName: "nav-text"
  },
];
