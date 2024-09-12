"use client";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import systemImg from "@/assets/imgs/png/system-uicons_picture 1.png";
import google from "@/assets/imgs/png/Group 6887.png";
import twitter from "@/assets/imgs/png/Group 6890.png";
import vk from "@/assets/imgs/png/Group 6893.png";
import medium from "@/assets/imgs/png/Group 6896.png";
import pencil from "@/assets/imgs/icons/pencil-02 (1).svg";
import arrow from "@/assets/imgs/icons/arrowDown.svg";
import calendar from "@/assets/imgs/icons/Calendar_Days.svg";
import close from "@/assets/imgs/icons/carbon_close-outline 2.svg";
import done from "@/assets/imgs/icons/done.svg";
import deleteIcon from "@/assets/imgs/icons/delete.svg";
import plus from "@/assets/imgs/icons/plus.svg";
import { Button, Text } from "@/ui";
import Footer from "@/components/Footer";
import "@/styles/style.scss";
function page() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("Выбрать сайты");

  const menuRef = useRef(null);
  const textRef = useRef(null);
  const arrowRef = useRef(null);
  const cardmainRef = useRef(null);
  const cardmainRefText = useRef(null);

  //   window.addEventListener("click", (e) => {
  //     if (
  //       e.target !== menuRef.current &&
  //       e.target !== cardmainRef.current &&
  //       e.target !== cardmainRefText.current &&
  //       e.target !== arrowRef.current &&
  //       e.target !== textRef.current
  //     ) {
  //       setOpen(false);
  //     }
  //   });
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        e.target !== menuRef.current &&
        e.target !== cardmainRef.current &&
        e.target !== cardmainRefText.current &&
        e.target !== arrowRef.current &&
        e.target !== textRef.current
      ) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [open]);
  return (
    <div>
      <Header />
      <TopBar />
      <main className="mb-20">
        <div className="container-box flex">
          <section className="w-full">
            <div className="editresources flex">
              <div className="editresources__inf">
                <div className="editresources__download">
                  <Image src={systemImg} alt="" />
                  <Text
                    className="w-1/2 text-center mb-1.5"
                    as="p"
                    text="Загрузить изображение основной статьи"
                  />
                  <Text
                    className="editresources__text"
                    as="p"
                    text="png, jpg, gif, webp, mp4"
                  />
                  <Text
                    className="editresources__volume"
                    as="p"
                    text="Max 200 mb"
                  />
                </div>
                <div className="editresources__social">
                  <Text
                    className="editresources__subtext"
                    as="p"
                    text="Соц. сети:"
                  />
                  <div className="editresources__list">
                    <Image src={google} alt="" />
                    <Image src={twitter} alt="" />
                    <Image src={vk} alt="" />
                    <Image src={medium} alt="" />
                  </div>
                </div>
                <button className="flex items-center editresources__btn">
                  Редактировать ресурсы
                  <Image className="ms-2.5" src={pencil} alt="" />
                </button>
              </div>

              <div className="editresources__change">
                <input
                  className="w-full mb-2.5 editresources__change-input"
                  type="text"
                  placeholder="Название поста"
                />
                <textarea
                  className="w-full mb-5 min-h-[200px] editresources__change-input"
                  placeholder="Описание..."
                ></textarea>
                <div className="flex items-center gap-5 mb-5">
                  <Button
                    className="editresources__change-btn w-1/2"
                    text="Уникализировать заголовки"
                  />
                  <div className="relative w-1/2">
                    <div
                      ref={cardmainRef}
                      onClick={() => setOpen(!open)}
                      className="editresources__change-btn w-full"
                    >
                      <p ref={cardmainRefText} onClick={() => setOpen(!open)}>
                        {text}
                      </p>
                      <Image src={arrow} />
                      <div
                        ref={menuRef}
                        className={
                          open === true
                            ? `editresources__change-select`
                            : "hidden"
                        }
                      >
                        <p
                          style={
                            text === "Ссылка"
                              ? { color: "#2272d4" }
                              : { color: "#333" }
                          }
                          onClick={() => setText("Ссылка")}
                        >
                          Ссылка
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
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-5">
                  <input
                    className="mb-2.5 editresources__change-input"
                    type="text"
                    placeholder="Автор публикации"
                  />
                  <Button
                    className="editresources__change-subbtn"
                    text="Дата и время"
                    children={<Image src={calendar} />}
                  />
                </div>
                <input
                  className="w-full mb-2.5 editresources__change-input"
                  type="text"
                  placeholder="#хештеги"
                />
                <div className="flex items-center mt-5 mb-9">
                  <input
                    type="radio"
                    id="filter1"
                    name="f"
                    defaultValue="Все связи ведут на указанный источник"
                  />
                  <span className="custom-radio"></span>
                  <label className="editresources__label" htmlFor="filter1">
                    Все связи ведут на указанный источник
                  </label>
                  <input
                    type="radio"
                    id="filter2"
                    name="f"
                    defaultValue="Случайное построение ссылок"
                  />
                  <span className="custom-radio"></span>
                  <label htmlFor="filter2">Случайное построение ссылок</label>
                </div>
                <input
                  className="w-full mb-2.5 editresources__change-input"
                  type="text"
                  placeholder="Ссылка на источник"
                />

                <div className="editresources__uniqueness">
                  <div className="flex items-center justify-between mb-3.5">
                    <Text
                      className="editresources__uniqueness-title"
                      as="p"
                      text="Уникализация заголовков"
                    />
                    <Image src={close} alt="" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="editresources__uniqueness-label flex flex-col w-[312px]">
                      <label>Название ресурса</label>
                      <input type="text" placeholder="Название ресурса" />
                    </div>
                    <div className="editresources__uniqueness-label flex flex-col w-[386px]">
                      <label>Заголовок</label>
                      <input
                        type="text"
                        placeholder="Придумайте заголовок... |"
                      />
                    </div>
                    <div className="flex items-center editresources__uniqueness-btns">
                      <button className="me-4">
                        <Image src={done} alt="" />
                      </button>
                      <button>
                        <Image src={deleteIcon} alt="" />
                      </button>
                    </div>
                  </div>
                  <button className="flex items-center mt-4 mb-5 text-[#333]">
                    Добавить
                    <Image className="ms-2" src={plus} alt="" />
                  </button>
                  <div className="flex items-center justify-between">
                    <div className="editresources__uniqueness-label flex flex-col w-[312px]">
                      <input type="text" placeholder="Название ресурса" />
                    </div>
                    <div className="editresources__uniqueness-label flex flex-col w-[386px]">
                      <input
                        type="text"
                        placeholder="Придумайте заголовок... |"
                      />
                    </div>
                    <div className="flex items-center editresources__uniqueness-btns">
                      <button className="me-4">
                        <Image src={done} alt="" />
                      </button>
                      <button>
                        <Image src={deleteIcon} alt="" />
                      </button>
                    </div>
                  </div>
                  <button className="flex items-center mt-4 text-[#333]">
                    Добавить
                    <Image className="ms-2" src={plus} alt="" />
                  </button>
                </div>
                <input
                  className="w-full editresources__change-input"
                  type="text"
                  placeholder="Ссылка на источник (необязательно)"
                />
                <Button className="editresources__btn-next" text="Далее" />
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default page;
