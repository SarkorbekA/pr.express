"use client";
import change from "@/assets/imgs/icons/change.svg";
import deleteIcon from "@/assets/imgs/icons/delete.svg";
import pencil_grean from "@/assets/imgs/icons/pencil-grean.svg";
import change_black from "@/assets/imgs/icons/change_black.svg";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import icon from "@/assets/imgs/icons/Vector.svg";
import refresh from "@/assets/imgs/icons/arrow-refresh-06.svg";
import done from "@/assets/imgs/icons/done.svg";
import arrow from "@/assets/imgs/icons/arrowDown.svg";
import rus from "@/assets/imgs/icons/russian-federation.svg";
import user from "@/assets/imgs/icons/user.svg";
import TopBar from "@/components/TopBar";
import "@/styles/style.scss";
import { Button, Text } from "@/ui";
import Image from "next/image";
import UsersTable from "@/components/Table/UsersTable";
import { useEffect, useRef, useState } from "react";

function page() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("Показать всё");

  const menuRef = useRef(null);
  const textRef = useRef(null);
  const arrowRef = useRef(null);
  const cardmainRef = useRef(null);
  const cardmainRefText = useRef(null);

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
    <>
      <Header />
      <TopBar />
      <main>
        <section className="dashboard w-full container-box">
          <div className="primary w-full py-7 px-10 mt-5">
            <div className="flex items-center justify-between mb-10">
              <Text
                className="text-[#333] font-medium text-[22px]"
                as="p"
                text="Пользователи"
              />
              <div className="flex items-center">
                <Text
                  className="text-[#333] font-medium text-[18px]"
                  as="p"
                  text="Сортировать по:"
                />
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
            </div>
            <UsersTable
              row={[
                {
                  ID: "ID",
                  name: "Заголовок",
                  email: "email",
                  lang: "Язык",
                  status: "Статус",
                  premium: "Премиум",
                  moderation: "Ждет модерации",
                  action: "Действие",
                },
              ]}
              columns={[
                {
                  ID: "№ 34590",
                  name: "Антон Орлов",
                  email: "alias@mail.ru",
                  lang: (
                    <>
                      <Image className="w-[22px] h-[16px]" src={rus} />
                    </>
                  ),
                  status: "В сети",
                  premium: (
                    <>
                      <Image className="w-[22px] h-[22px]" src={user} />
                    </>
                  ),
                  moderation: "3",
                  action: (
                    <>
                      <Button
                        className="mr-[22px]"
                        children={
                          <Image
                            className="w-[22px] h-[19px]"
                            src={pencil_grean}
                          />
                        }
                      />
                      <Button
                        className="mr-[22px]"
                        children={
                          <Image
                            className="w-[22px] h-[22px]"
                            src={change_black}
                          />
                        }
                      />
                      <Button
                        className="mr-[22px]"
                        children={
                          <Image className="w-[22px] h-[22px]" src={change} />
                        }
                      />
                      <Button
                        children={
                          <Image
                            className="w-[22px] h-[22px]"
                            src={deleteIcon}
                          />
                        }
                      />
                    </>
                  ),
                },
                {
                    ID: "№ 34590",
                    name: "Антон Орлов",
                    email: "alias@mail.ru",
                    lang: (
                      <>
                        <Image className="w-[22px] h-[16px]" src={rus} />
                      </>
                    ),
                    status: "Не в сети",
                    premium: (
                      <>
                        <Image className="w-[22px] h-[22px]" src={user} />
                      </>
                    ),
                    moderation: "3",
                    action: (
                      <>
                        <Button
                          className="mr-[22px]"
                          children={
                            <Image
                              className="w-[22px] h-[19px]"
                              src={pencil_grean}
                            />
                          }
                        />
                        <Button
                          className="mr-[22px]"
                          children={
                            <Image
                              className="w-[22px] h-[22px]"
                              src={change_black}
                            />
                          }
                        />
                        <Button
                          className="mr-[22px]"
                          children={
                            <Image className="w-[22px] h-[22px]" src={change} />
                          }
                        />
                        <Button
                          children={
                            <Image
                              className="w-[22px] h-[22px]"
                              src={deleteIcon}
                            />
                          }
                        />
                      </>
                    ),
                  },
                  {
                    ID: "№ 34590",
                    name: "Антон Орлов",
                    email: "alias@mail.ru",
                    lang: (
                      <>
                        <Image className="w-[22px] h-[16px]" src={rus} />
                      </>
                    ),
                    status: "В сети",
                    premium: (
                      <>
                        <Image className="w-[22px] h-[22px]" src={user} />
                      </>
                    ),
                    moderation: "3",
                    action: (
                      <>
                        <Button
                          className="mr-[22px]"
                          children={
                            <Image
                              className="w-[22px] h-[19px]"
                              src={pencil_grean}
                            />
                          }
                        />
                        <Button
                          className="mr-[22px]"
                          children={
                            <Image
                              className="w-[22px] h-[22px]"
                              src={change_black}
                            />
                          }
                        />
                        <Button
                          className="mr-[22px]"
                          children={
                            <Image className="w-[22px] h-[22px]" src={change} />
                          }
                        />
                        <Button
                          children={
                            <Image
                              className="w-[22px] h-[22px]"
                              src={deleteIcon}
                            />
                          }
                        />
                      </>
                    ),
                  },
                  {
                    ID: "№ 34590",
                    name: "Антон Орлов",
                    email: "alias@mail.ru",
                    lang: (
                      <>
                        <Image className="w-[22px] h-[16px]" src={rus} />
                      </>
                    ),
                    status: "В сети",
                    premium: (
                      <>
                        <Image className="w-[22px] h-[22px]" src={user} />
                      </>
                    ),
                    moderation: "3",
                    action: (
                      <>
                        <Button
                          className="mr-[22px]"
                          children={
                            <Image
                              className="w-[22px] h-[19px]"
                              src={pencil_grean}
                            />
                          }
                        />
                        <Button
                          className="mr-[22px]"
                          children={
                            <Image
                              className="w-[22px] h-[22px]"
                              src={change_black}
                            />
                          }
                        />
                        <Button
                          className="mr-[22px]"
                          children={
                            <Image className="w-[22px] h-[22px]" src={change} />
                          }
                        />
                        <Button
                          children={
                            <Image
                              className="w-[22px] h-[22px]"
                              src={deleteIcon}
                            />
                          }
                        />
                      </>
                    ),
                  },
                  {
                    ID: "№ 34590",
                    name: "Антон Орлов",
                    email: "alias@mail.ru",
                    lang: (
                      <>
                        <Image className="w-[22px] h-[16px]" src={rus} />
                      </>
                    ),
                    status: "Не в сети",
                    premium: (
                      <>
                        <Image className="w-[22px] h-[22px]" src={user} />
                      </>
                    ),
                    moderation: "3",
                    action: (
                      <>
                        <Button
                          className="mr-[22px]"
                          children={
                            <Image
                              className="w-[22px] h-[19px]"
                              src={pencil_grean}
                            />
                          }
                        />
                        <Button
                          className="mr-[22px]"
                          children={
                            <Image
                              className="w-[22px] h-[22px]"
                              src={change_black}
                            />
                          }
                        />
                        <Button
                          className="mr-[22px]"
                          children={
                            <Image className="w-[22px] h-[22px]" src={change} />
                          }
                        />
                        <Button
                          children={
                            <Image
                              className="w-[22px] h-[22px]"
                              src={deleteIcon}
                            />
                          }
                        />
                      </>
                    ),
                  },
              ]}
            />
          </div>
          <Button className="w-full btn-more" text="Показать еще" />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default page;
