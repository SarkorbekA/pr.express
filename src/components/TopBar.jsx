import React from "react";
import { Button, Text } from "../ui";
import search from "@/assets/imgs/icons/search.svg";
import dollar from "@/assets/imgs/icons/dollar.svg";
import bell from "@/assets/imgs/icons/Group 7101.svg";
import Image from "next/image";

function TopBar() {
  return (
    <div className="container-box">
      <div className="topbar flex items-center justify-between">
        <div className="topbar__search flex items-center justify-between">
          <input type="text" placeholder="Поиск по сайтам" />
          <Button children={<Image src={search} alt="search" />} />
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="html"
            name="search"
            defaultValue="Поиск по сайтам"
          />
          <span className="custom-radio"></span>
          <label className="topbar__label" htmlFor="html">Поиск по сайтам</label>
          <input type="radio" id="css" name="search" defaultValue="CSS" />
          <span className="custom-radio"></span>
          <label htmlFor="css">Поиск по категориям</label>
        </div>

        <div className="flex items-center">
          <Image src={dollar} alt="" />
          <Text as="p" text="1240.00" />
          <span className="bg-[#333] text-white rounded-lg w-[40px] h-[30px] flex items-center justify-center ms-2.5">23</span>
        </div>
        <Image src={bell} alt="" />
        <a className="topbar__link" href="#">Написать статью</a>
      </div>
    </div>
  );
};

export default TopBar;
