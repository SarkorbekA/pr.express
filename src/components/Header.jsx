"use client";
import logo from "@/assets/imgs/svg/logo.svg";
import arrow from "@/assets/imgs/icons/arrowDown.svg";
import line from "@/assets/imgs/svg/Line 165.svg";
import Image from 'next/image';
import { Button, Logo, Text } from "@/ui";
// import Image from "next/image";

function Header() {
  return (
    <div className="container-box">
      <header className="header flex items-center justify-between">
        <Logo
          className="header__logo"
          width={160}
          height={30}
          src={logo}
          alt="logo"
        />
        <div className="flex items-center">
          <nav>
            <ul className="flex header__list items-center">
              <li>
                <Text as="p" text="Ресурсы" />
              </li>
              <li className="flex items-center">
                <Text as="p" text="Публикации" />
                <Image src={arrow} alt="arrow" />
              </li>
              <li>
                <Text as="p" text="Архив" />
              </li>
              <li>
                <Text as="p" text="Настройки" />
              </li>
            </ul>
          </nav>
          <div className="flex items-center">
            <Image className="header__line" src={line} alt="" />
            <Button text="Вход" /> <p className="mx-1"> / </p>{" "}
            <Button text="Регистрация" />
          </div>
          <div className="flex items-center header__lang">
            <Text as="span" text="RU" />{" "}
            <Image className="ms-1" src={arrow} alt="arrow" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
