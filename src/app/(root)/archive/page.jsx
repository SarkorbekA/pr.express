import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import { Button, Text } from "@/ui";
import Image from "next/image";
import React from "react";
import icon from "@/assets/imgs/icons/Vector.svg";
import deleteIcon from "@/assets/imgs/icons/delete.svg";
import refresh from "@/assets/imgs/icons/arrow-refresh-06.svg";
import done from "@/assets/imgs/icons/done.svg";
import DashboardTable from "@/components/Table/DashboardTable";
import Footer from "@/components/Footer";
import pencil_grean from "@/assets/imgs/icons/pencil-grean.svg";
import change from "@/assets/imgs/icons/change.svg";
import "@/styles/style.scss";

function page() {
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
                text="Архив"
              />
              <div className="flex items-center">
                <div className="form-group flex items-center mr-[60px]">
                  <input type="checkbox" id="category6" />
                  <label htmlFor="category6">Выбрать все</label>
                </div>
                <Button
                  className="mr-[22px]"
                  children={
                    <Image className="w-[22px] h-[19px]" src={pencil_grean} />
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
                    <Image className="w-[22px] h-[22px]" src={deleteIcon} />
                  }
                />
              </div>
            </div>
            <DashboardTable
              row={[
                {
                  name: "Заголовок",
                  date: "Дата / Время",
                  ID: "ID",
                  action: "Действие",
                },
              ]}
              columns={[
                {
                  name: (
                    <>
                      <div className="form-group form-group-table flex items-center mr-[60px]">
                        <input type="checkbox" id="archive1" />
                        <label htmlFor="archive1">
                          Семантический разбор внешних противодействий не
                          позволил@.
                        </label>
                      </div>
                    </>
                  ),
                  date: "01.01.2020 / 15:30:23",
                  ID: "№ 00",
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
                  name: (
                    <>
                      <div className="form-group form-group-table flex items-center mr-[60px]">
                        <input type="checkbox" id="archive2" />
                        <label htmlFor="archive2">
                          Семантический разбор внешних противодействий не
                          позволил@.
                        </label>
                      </div>
                    </>
                  ),
                  date: "01.01.2020 / 15:30:23",
                  ID: "№ 00",
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
                  name: (
                    <>
                      <div className="form-group form-group-table flex items-center mr-[60px]">
                        <input type="checkbox" id="archive3" />
                        <label htmlFor="archive3">
                          Семантический разбор внешних противодействий не
                          позволил@.
                        </label>
                      </div>
                    </>
                  ),
                  date: "01.01.2020 / 15:30:23",
                  ID: "№ 00",
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
                  name: (
                    <>
                      <div className="form-group form-group-table flex items-center mr-[60px]">
                        <input type="checkbox" id="archive4" />
                        <label htmlFor="archive4">
                          Семантический разбор внешних противодействий не
                          позволил@.
                        </label>
                      </div>
                    </>
                  ),
                  date: "01.01.2020 / 15:30:23",
                  ID: "№ 00",
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
