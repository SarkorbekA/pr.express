import React from "react";
import { Button, Text, Title } from "@/ui";
import dollar from "@/assets/imgs/icons/dollar.svg";
import material from "@/assets/imgs/icons/material-symbols-light_article-shortcut-outline 1.svg";
import plus from "@/assets/imgs/icons/plus.svg";
import chart from "@/assets/imgs/png/chart.png";
import icon from "@/assets/imgs/icons/Vector.svg";
import deleteIcon from "@/assets/imgs/icons/delete.svg";
import refresh from "@/assets/imgs/icons/arrow-refresh-06.svg";
import done from "@/assets/imgs/icons/done.svg";
import DashboardTable from "@/components/Table/DashboardTable";
import "@/styles/style.scss";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
function page() {
  return (
    <div>
      <Header />
      <TopBar />
      <main>
        <section className="dashboard w-full container-box">
          <div className="primary w-full p-7 pr-6 h-[388px]">
            <Title
              className="dashboard__title"
              as="h2"
              text="Приборная панель"
            />
            <div className="flex justify-between gap-10">
              <div className="w-1/2 flex flex-col justify-between">
                <div className="flex justify-between w-[90%]">
                  <div className="flex flex-col">
                    <Text className="dashboard__text" as="p" text="Ресурсы" />
                    <div className="flex items-center">
                      <Text
                        className="dashboard__subtext"
                        as="p"
                        text="1,569.00"
                      />
                      <Image
                        className="ms-1 w-[32px] h-[32px]"
                        src={dollar}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Text
                      className="dashboard__text"
                      as="p"
                      text="Публикации"
                    />
                    <Text className="dashboard__subtext" as="p" text="290" />
                  </div>
                  <div className="flex flex-col">
                    <Text className="dashboard__text" as="p" text="Продажи" />
                    <Text className="dashboard__subtext" as="p" text="69" />
                  </div>
                </div>
                <div className="dashboard__buttons flex items-center">
                  <Button
                    className="dashboard__btn flex items-center"
                    text="Разместить статью"
                    children={<Image className="ms-2" src={material} />}
                  />
                  <Button
                    className="dashboard__subbtn flex items-center"
                    text="Добавить ресурс"
                    children={<Image className="ms-2" src={plus} />}
                  />
                </div>
              </div>
              <div className="dashboard__chart">
                <Image src={chart} alt="" />
              </div>
            </div>
          </div>
          <div className="primary w-full py-7 px-10 mt-5">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center">
                <Text
                  className="text-[#333] font-medium text-[22px]"
                  as="p"
                  text="Публикации"
                />
                <Text
                  className="mx-2 text-[#626262] font-medium text-[22px]"
                  as="p"
                  text=" | "
                />
                <Text
                  className="text-[#626262] font-medium text-[22px]"
                  as="p"
                  text="Ресурсы"
                />
              </div>
              <div className="flex items-center">
                <div className="form-group flex items-center mr-[60px]">
                  <input type="checkbox" id="category6" />
                  <label htmlFor="category6">Выбрать все</label>
                </div>
                <Button
                  className="mr-[22px]"
                  children={<Image className="w-[22px] h-[19px]" src={icon} />}
                />
                <Button
                  children={
                    <Image className="w-[22px] h-[22px]" src={deleteIcon} />
                  }
                />
              </div>
            </div>
            <DashboardTable
              row={[
                {
                  name: "Заголовок",
                  sum: "Сумма",
                  date: "Дата / Время",
                  content: "Содержание",
                  ID: "ID",
                  status: "Статус",
                  action: "Действие",
                },
              ]}
              columns={[
                {
                  name: (
                    <>
                      <div className="form-group form-group-table flex items-center mr-[60px]">
                        <input type="checkbox" id="dashboard1" />
                        <label htmlFor="dashboard1">
                          Семантический разбор внешних противодействий не
                          позволил@.
                        </label>
                      </div>
                    </>
                  ),
                  sum: "189.00",
                  date: "01.01.2020 / 15:30:23",
                  content: "Публикация",
                  ID: "№ 00",
                  status: (
                    <>
                      <Image src={refresh} alt="" />
                    </>
                  ),
                  action: (
                    <>
                      <Button
                        className="mr-[22px]"
                        children={
                          <Image className="w-[22px] h-[19px]" src={icon} />
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
                  name: (
                    <>
                      <div className="form-group form-group-table flex items-center mr-[60px]">
                        <input type="checkbox" id="dashboard1" />
                        <label htmlFor="dashboard1">
                          Семантический разбор внешних противодействий не
                          позволил@.
                        </label>
                      </div>
                    </>
                  ),
                  sum: "189.00",
                  date: "01.01.2020 / 15:30:23",
                  content: "Публикация",
                  ID: "№ 00",
                  status: (
                    <>
                      <Image src={done} alt="" />
                    </>
                  ),
                  action: (
                    <>
                      <Button
                        className="mr-[22px]"
                        children={
                          <Image className="w-[22px] h-[19px]" src={icon} />
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
                  name: (
                    <>
                      <div className="form-group form-group-table flex items-center mr-[60px]">
                        <input type="checkbox" id="dashboard1" />
                        <label htmlFor="dashboard1">
                          Семантический разбор внешних противодействий не
                          позволил@.
                        </label>
                      </div>
                    </>
                  ),
                  sum: "189.00",
                  date: "01.01.2020 / 15:30:23",
                  content: "Публикация",
                  ID: "№ 00",
                  status: (
                    <>
                      <Image src={refresh} alt="" />
                    </>
                  ),
                  action: (
                    <>
                      <Button
                        className="mr-[22px]"
                        children={
                          <Image className="w-[22px] h-[19px]" src={icon} />
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
                  name: (
                    <>
                      <div className="form-group form-group-table flex items-center mr-[60px]">
                        <input type="checkbox" id="dashboard1" />
                        <label htmlFor="dashboard1">
                          Семантический разбор внешних противодействий не
                          позволил@.
                        </label>
                      </div>
                    </>
                  ),
                  sum: "189.00",
                  date: "01.01.2020 / 15:30:23",
                  content: "Публикация",
                  ID: "№ 00",
                  status: (
                    <>
                      <Image src={refresh} alt="" />
                    </>
                  ),
                  action: (
                    <>
                      <Button
                        className="mr-[22px]"
                        children={
                          <Image className="w-[22px] h-[19px]" src={icon} />
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
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default page;
