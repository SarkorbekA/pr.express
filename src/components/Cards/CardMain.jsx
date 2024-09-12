"use client";
import React, { useRef, useState } from "react";
import arrow from "@/assets/imgs/icons/arrowDown.svg";
import Card from "./Card";
import { Button } from "@/ui";
import Table from "@/components/Table/Table";
import britain from "@/assets/imgs/icons/britain.svg";
import rus from "@/assets/imgs/icons/russian-federation.svg";
import link from "@/assets/imgs/icons/link.svg";
import refresh from "@/assets/imgs/icons/arrow-refresh-06.svg";
import done from "@/assets/imgs/icons/done.svg";
import deleteIcon from "@/assets/imgs/icons/fluent_delete-24-regular 2.svg";
import info from "@/assets/imgs/icons/information-circle-contained (1).svg";
import pencil from "@/assets/imgs/icons/pencil-02.svg";
import Image from "next/image";

function CardMain() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("Показать всё");

  const menuRef = useRef(null);
  const textRef = useRef(null);
  const arrowRef = useRef(null);
  const cardmainRef = useRef(null);
  const cardmainRefText = useRef(null);

  window.addEventListener("click", (e) => {
    if (
      e.target !== menuRef.current &&
      e.target !== cardmainRef.current &&
      e.target !== cardmainRefText.current &&
      e.target !== arrowRef.current &&
      e.target !== textRef.current
    ) {
      setOpen(false);
    }
  });

  return (
    <section className="cardmain w-full">
      <div className="cardmain__filters flex items-center">
        <p>Сортировать по:</p>
        <div className="cardmain__main-select">
          <div
            ref={cardmainRef}
            onClick={() => setOpen(!open)}
            className="cardmain__filter flex items-center justify-between"
          >
            <span ref={cardmainRefText}>{text}</span>
            <Image src={arrow} alt="" />
          </div>
          <div
            ref={menuRef}
            className={open === true ? `cardmain__select` : "hidden"}
          >
            <p
              style={
                text === "Сначала новые"
                  ? { color: "#2272d4" }
                  : { color: "#333" }
              }
              onClick={() => setText("Сначала новые")}
            >
              Сначала новые
            </p>
            <p
              style={
                text === "Сначала старые"
                  ? { color: "#2272d4" }
                  : { color: "#333" }
              }
              onClick={() => setText("Сначала старые")}
            >
              Сначала старые
            </p>
            <p
              style={
                text === "Сначала дороже"
                  ? { color: "#2272d4" }
                  : { color: "#333" }
              }
              onClick={() => setText("Сначала дороже")}
            >
              Сначала дороже
            </p>
            <p
              style={
                text === "Сначала дешевле"
                  ? { color: "#2272d4" }
                  : { color: "#333" }
              }
              onClick={() => setText("Сначала дешевле")}
            >
              Сначала дешевле
            </p>
          </div>
        </div>
      </div>
      {/* <div className="cardmain__lists">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div> */}
      <Table
        row={[
          {
            name: "Название",
            category: "Категории",
            lang: "Язык",
            link: "Ссылка",
            status: "Статус",
            action: "Действия",
          },
        ]}
        columns={[
          {
            name: "crypto_info_name",
            category: "Новости",
            lang: (
              <>
                <Image src={britain} alt="" />
              </>
            ),
            link: (
              <>
                <Image src={link} alt="" />
              </>
            ),
            status: (
              <>
                <Image src={refresh} alt="" />
              </>
            ),
            action: <>
              <div className="flex items-center gap-6">
                <button><Image src={info} alt="" /></button>
                <button><Image src={deleteIcon} alt="" /></button>
                <button><Image src={pencil} alt="" /></button>
              </div>
            </>,
          },

          {
            name: "crypto_info_name",
            category: "Новости",
            lang: (
              <>
                <Image src={britain} alt="" />
              </>
            ),
            link: (
              <>
                <Image src={link} alt="" />
              </>
            ),
            status: (
              <>
                <Image src={done} alt="" />
              </>
            ),
            action: <>
              <div className="flex items-center gap-6">
                <button><Image src={info} alt="" /></button>
                <button><Image src={deleteIcon} alt="" /></button>
                <button><Image src={pencil} alt="" /></button>
              </div>
            </>,
          },

          {
            name: "crypto_info_name",
            category: "Новости",
            lang: (
              <>
                <Image src={rus} alt="" />
              </>
            ),
            link: (
              <>
                <Image src={link} alt="" />
              </>
            ),
            status: (
              <>
                <Image src={refresh} alt="" />
              </>
            ),
            action: <>
              <div className="flex items-center gap-6">
                <button><Image src={info} alt="" /></button>
                <button><Image src={deleteIcon} alt="" /></button>
                <button><Image src={pencil} alt="" /></button>
              </div>
            </>,
          },
        ]}
      />
      <Button className="w-full cardmain__btn" text="Показать еще" />
    </section>
  );
}

export default CardMain;
