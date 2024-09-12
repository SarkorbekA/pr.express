import change from "@/assets/imgs/icons/change.svg";
import deleteIcon from "@/assets/imgs/icons/delete.svg";
import pencil_grean from "@/assets/imgs/icons/pencil-grean.svg";
import change_black from "@/assets/imgs/icons/change_black.svg";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import icon from "@/assets/imgs/icons/Vector.svg";
import downloadIcon from "@/assets/imgs/icons/download.svg";
import refresh from "@/assets/imgs/icons/arrow-refresh-06.svg";
import dollar from "@/assets/imgs/icons/dollar.svg";
import publication from "@/assets/imgs/png/publication.png";
import warning from "@/assets/imgs/icons/warning.svg";
import sort from "@/assets/imgs/icons/sort.svg";
import link from "@/assets/imgs/icons/link.svg";
import done from "@/assets/imgs/icons/done.svg";
import google from "@/assets/imgs/svg/google.svg"
import vk from "@/assets/imgs/svg/vk.svg"
import twitter from "@/assets/imgs/svg/twitter.svg"
import medium from "@/assets/imgs/svg/medium.svg"
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
            <Text
              className="text-[#333] font-medium text-[22px] mb-10"
              as="p"
              text="№34567"
            />
            <div className="flex items-center justify-between w-full mb-2.5 ml-[24px]">
                <div className="flex items-center font-medium text-[#333]">
                    <Text className="text-[16px]" as="p" text="Заголовок" />
                    <Text className="bg-[#333] me-1 ms-5 rounded-[16px] text-[12px] text-white px-[13px] py-[3px]" as="p" text="23" />
                    <Image src={sort} />
                </div>
                <Text className="relative dashboard__relative-77 text-[16px] font-medium text-[#333]" as="p" text="Сумма" />
                <Text className="relative dashboard__relative-70 text-[16px] font-medium text-[#333]" as="p" text="Дата / Время" />
                <Text className="relative dashboard__relative-100 text-[16px] font-medium text-[#333]" as="p" text="Ресурсы" />
                <Text className="text-[16px] relative dashboard__relative-50 font-medium text-[#333]" as="p" text="Доп. услуги" />
            </div>
            <div className="px-[30px] py-[20px] bg-[#f9f9f9] rounded-[20px] mb-[35px]">
                <div className="flex items-center justify-between">
                    <Text className="text-[16px] font-normal text-[#333]" as="p" text="Заголовок" />
                    <Text className="text-[16px] font-normal text-[#333]" as="p" text="189.00 $" />
                    <Text className="text-[16px] font-normal text-[#333]" as="p" text="01.01.2020" />
                    <Text className="text-[16px] font-normal text-[#333]" as="p" text="234" />
                    <ul className="flex items-center gap-2">
                        <li><Image className="w-[40px] h-[40px]" src={google} /></li>
                        <li><Image className="w-[40px] h-[40px]" src={vk} /></li>
                        <li><Image className="w-[40px] h-[40px]" src={twitter} /></li>
                        <li><Image className="w-[40px] h-[40px]" src={medium} /></li>
                    </ul>
                </div>
                <div className="flex items-center mt-[20px] pt-[20px] dashboard__border border-[#626262] ">
                    <Text className="text-[16px] me-[40px] font-normal text-[#f22e2e]" as="p" text="Отклонено" />
                    <Text className="text-[16px] me-[40px] font-normal text-[#333]" as="p" text="С другой стороны, консультация с широким активом создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса переосмысления внешнеэкономических политик" />
                </div>
            </div>
            <div className="flex items-center justify-between mb-10">
              <Text
                className="text-[#333] font-medium text-[22px]"
                as="p"
                text="Список выбранных ресурсов"
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
                <Button
                  className="flex items-center justify-center bg-[#333] text-white rounded-[40px] ms-[60px] w-[185px] h-[40px]"
                  text={"Скачать отчёт"}
                  children={
                    <Image
                      className="w-[22px] h-[22px] ms-1"
                      src={downloadIcon}
                    />
                  }
                />
              </div>
            </div>
            <div className="gap-[15px] flex flex-col">
              {[1, 2, 3, 4, 5].map((_, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex items-center justify-between w-full bg-[#f9f9f9] text-[#333] font-medium rounded-[20px] px-[30px] py-5 "
                  >
                    <div className="form-group form-group-table flex items-center mr-[60px]">
                      <input type="checkbox" id="publicationDetails1" />
                      {/* <Image className="w-[60px] h-[60px] me-5" src={publication} /> */}
                      <label htmlFor="publicationDetails1">
                        Семантический разбор внешних противодействий не
                        позволил.
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Text
                        className="text-[22px] font-medium me-1"
                        as="p"
                        text="189.00"
                      />
                      <Image
                        className={"w-[10px] h-[21px] ms-1"}
                        src={dollar}
                        alt=""
                      />
                    </div>
                    <div className="flex items-center">
                      <Image src={link} alt="link" />
                      <Text as="p" text="Ссылка" />
                    </div>
                    <div>
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
                        className="mr-[22px]"
                        children={
                          <Image className="w-[22px] h-[22px]" src={warning} />
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
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <Button className="w-full btn-more" text="Показать еще" />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default page;
