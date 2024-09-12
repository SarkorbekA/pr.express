import change from "@/assets/imgs/icons/change.svg";
import deleteIcon from "@/assets/imgs/icons/delete.svg";
import pencil_grean from "@/assets/imgs/icons/pencil-grean.svg";
import change_black from "@/assets/imgs/icons/change_black.svg";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import icon from "@/assets/imgs/icons/Vector.svg";
import refresh from "@/assets/imgs/icons/arrow-refresh-06.svg";
import done from "@/assets/imgs/icons/done.svg";
import DashboardTable from "@/components/Table/DashboardTable";
import TopBar from "@/components/TopBar";
import "@/styles/style.scss";
import { Button, Text } from "@/ui";
import Image from "next/image";

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
                text="Мои публикации"
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
                    <Image className="w-[22px] h-[22px]" src={change_black} />
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
                  sum: "Сумма",
                  date: "Дата / Время",
                  content: "Ресурсы",
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
                  content: "Ресурс",
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
                  content: "Ресурс",
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
                  date: "01.01.2020",
                  content: "Ресурс",
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
                  content: "Ресурс",
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
