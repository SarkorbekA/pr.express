"use client";
import React, { useState } from "react";
import { Button, Text, Title } from "@/ui";
import dollar from "@/assets/imgs/icons/dollar.svg";
import material from "@/assets/imgs/icons/material-symbols-light_article-shortcut-outline 1.svg";
import plus from "@/assets/imgs/icons/plus.svg";
import chart from "@/assets/imgs/png/chart.png";
import icon from "@/assets/imgs/icons/Vector.svg";
import deleteIcon from "@/assets/imgs/icons/delete.svg";
import refresh from "@/assets/imgs/icons/arrow-refresh-06.svg";
import done from "@/assets/imgs/icons/done.svg";
import blueEllipse from "@/assets/imgs/icons/blue.svg";
import DashboardTable from "@/components/Table/DashboardTable";
import "@/styles/style.scss";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import LineChart from "@/components/Charts/Chart";
function page() {
  const [chartData, setChartData] = useState(getData("Сегодня"));

  function getData(period) {
    switch (period) {
      case "Сегодня":
        return {
          labels: ["1", "2", "3", "4"],
          data: [65, 59, 10, 70], // Birinchi chiziq
          secondData: [28, 48, 40, 19], // Ikkinchi chiziq
        };
      case "Вчера":
        return {
          labels: ["1", "2", "3", "4", "5"],
          data: [65, 59, 80, 86, 40], // Birinchi chiziq
          secondData: [33, 25, 40, 50, 20], // Ikkinchi chiziq
        };
      case "Неделя":
        return {
          labels: ["1", "2", "3", "4", "5", "6"],
          data: [65, 59, 80, 81, 56, 20], // Birinchi chiziq
          secondData: [42, 30, 45, 70, 60, 30], // Ikkinchi chiziq
        };
      case "Месяц":
        return {
          labels: ["1", "2", "3", "4", "5", "6", "7"],
          data: [65, 59, 80, 81, 56, 55, 40], // Birinchi chiziq
          secondData: [30, 60, 25, 80, 50, 70, 60], // Ikkinchi chiziq
        };
      case "Год":
        return {
          labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
          data: [65, 59, 80, 81, 56, 55, 40, 60, 70], // Birinchi chiziq
          secondData: [20, 50, 60, 45, 30, 90, 80, 55, 65], // Ikkinchi chiziq
        };
      default:
        return {
          labels: ["1", "2", "3", "4"],
          data: [65, 59, 10, 70], // Birinchi chiziq
          secondData: [28, 48, 40, 19], // Ikkinchi chiziq
        };
    }
  }

  return (
    <div>
      <Header />
      <TopBar />
      <main>
        <section className="dashboard w-full container-box">
          <div className="primary w-full p-7 pr-6 h-[388px]">
            <div className="flex items-center justify-between">
              <Title
                className="dashboard__title"
                as="h2"
                text="Приборная панель"
              />
              <div className="mb-[30px]">
                <div className="flex items-center">
                  <Text
                    className="me-2 text-[#6a6a6a] font-medium"
                    as="p"
                    text="Ресурсы"
                  />
                  <Image src={blueEllipse} />
                </div>
              </div>
            </div>
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
                {/* <Image src={chart} alt="" /> */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <button
                    className="dashboard__chart-btn"
                    onClick={() => setChartData(getData("Сегодня"))}
                  >
                    Сегодня
                  </button>
                  <button
                    className="dashboard__chart-btn"
                    onClick={() => setChartData(getData("Вчера"))}
                  >
                    Вчера
                  </button>
                  <button
                    className="dashboard__chart-btn"
                    onClick={() => setChartData(getData("Неделя"))}
                  >
                    Неделя
                  </button>
                  <button
                    className="dashboard__chart-btn"
                    onClick={() => setChartData(getData("Месяц"))}
                  >
                    Месяц
                  </button>
                  <button
                    className="dashboard__chart-btn"
                    onClick={() => setChartData(getData("Год"))}
                  >
                    Год
                  </button>
                </div>
                <LineChart chartData={chartData} />
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
                        <input type="checkbox" id="dashboard2" />
                        <label htmlFor="dashboard2">
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
                        <input type="checkbox" id="dashboard3" />
                        <label htmlFor="dashboard3">
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
                        <input type="checkbox" id="dashboard4" />
                        <label htmlFor="dashboard4">
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
          <Button className="w-full btn-more" text="Показать еще" />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default page;
