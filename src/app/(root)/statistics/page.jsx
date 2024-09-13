import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import calendar from "@/assets/imgs/icons/Calendar_Days.svg";
import search from "@/assets/imgs/icons/search.svg";
import dollar from "@/assets/imgs/icons/dollar.svg";
import "@/styles/style.scss";
import { Button, Text, Title } from "@/ui";
import Image from "next/image";

function page() {
  return (
    <>
      <Header />
      <TopBar />
      <main>
        <div className="container-box flex flex-col gap-[20px]">
          <div className="primary statistics py-[30px] px-[40px]">
            <div className="flex items-center justify-between">
              <Title
                className="text-[22px] font-medium text-[#333]"
                as="h3"
                text="Пользователи"
              />
              <Button
                className="statistics__change-subbtn"
                text="Дата и время"
                children={<Image src={calendar} />}
              />
            </div>
            <div className="flex items-center justify-between mt-5 pt-5 statistics__info w-full gap-[110px] ">
              <div className="flex flex-col w-3/12">
                <Text
                  className="font-medium text-[32px] text-[#333] mb-1"
                  as="p"
                  text="36,789"
                />
                <Text
                  className="font-normal text-[16px] text-[#333]"
                  as="p"
                  text="Зарегистрированных пользователей"
                />
              </div>
              <div className="flex flex-col w-3/12">
                <Text
                  className="font-medium text-[32px] text-[#333] mb-1"
                  as="p"
                  text="6,789"
                />
                <Text
                  className="font-normal text-[16px] text-[#333]"
                  as="p"
                  text="Оплатили хотя бы один заказ"
                />
              </div>
              <div className="flex flex-col w-3/12">
                <Text
                  className="font-medium text-[32px] text-[#333] mb-1"
                  as="p"
                  text="6,789"
                />
                <Text
                  className="font-normal text-[16px] text-[#333]"
                  as="p"
                  text="Пользователей онлайн"
                />
              </div>
              <div className="flex flex-col w-3/12">
                <Text
                  className="font-medium text-[32px] text-[#333] mb-1"
                  as="p"
                  text="36,789"
                />
                <Text
                  className="font-normal text-[16px] text-[#333]"
                  as="p"
                  text="Регистраций за последний месяц"
                />
              </div>
              <div className="flex flex-col w-3/12">
                <Text
                  className="font-medium text-[32px] text-[#333] mb-1"
                  as="p"
                  text="36,789"
                />
                <Text
                  className="font-normal text-[16px] text-[#333]"
                  as="p"
                  text="Премиум пользователей"
                />
              </div>
            </div>
          </div>

          <div className="primary statistics py-[30px] px-[40px]">
            <div className="flex items-center justify-between">
              <Title
                className="text-[22px] font-medium text-[#333]"
                as="h3"
                text="Финансы"
              />
              <Button
                className="statistics__change-subbtn"
                text="Дата и время"
                children={<Image src={calendar} />}
              />
            </div>
            <div className="flex items-center justify-between mt-5 pt-5 statistics__info w-full gap-[110px] ">
              <div className="flex flex-col w-3/12">
                <div className="flex items-center">
                  <Image className="me-1 w-[22px] h-[33px]" src={dollar} />
                  <Text
                    className="font-medium text-[32px] text-[#333] mb-1"
                    as="p"
                    text="36,789"
                  />
                </div>
                <Text
                  className="font-normal text-[16px] text-[#333]"
                  as="p"
                  text="Зарегистрированных пользователей"
                />
              </div>
              <div className="flex flex-col w-3/12">
                <div className="flex items-center">
                  <Image className="me-1 w-[22px] h-[33px]" src={dollar} />
                  <Text
                    className="font-medium text-[32px] text-[#333] mb-1"
                    as="p"
                    text="6,789"
                  />
                </div>
                <Text
                  className="font-normal text-[16px] text-[#333]"
                  as="p"
                  text="Оплатили хотя бы один заказ"
                />
              </div>
              <div className="flex flex-col w-3/12">
                <div className="flex items-center">
                  <Image className="me-1 w-[22px] h-[33px]" src={dollar} />
                  <Text
                    className="font-medium text-[32px] text-[#333] mb-1"
                    as="p"
                    text="6,789"
                  />
                </div>
                <Text
                  className="font-normal text-[16px] text-[#333]"
                  as="p"
                  text="Пользователей онлайн"
                />
              </div>
              <div className="flex flex-col w-3/12">
                <div className="flex items-center">
                  <Image className="me-1 w-[22px] h-[33px]" src={dollar} />
                  <Text
                    className="font-medium text-[32px] text-[#333] mb-1"
                    as="p"
                    text="36,789"
                  />
                </div>
                <Text
                  className="font-normal text-[16px] text-[#333]"
                  as="p"
                  text="Регистраций за последний месяц"
                />
              </div>
              <div className="flex flex-col w-3/12">
                <div className="flex items-center">
                  <Image className="me-1 w-[22px] h-[33px]" src={dollar} />
                  <Text
                    className="font-medium text-[32px] text-[#333] mb-1"
                    as="p"
                    text="6,789"
                  />
                </div>
                <Text
                  className="font-normal text-[16px] text-[#333]"
                  as="p"
                  text="Премиум пользователей"
                />
              </div>
            </div>
            <div className="flex items-center justify-between statistics__info mt-5 pt-5">
              <Title
                className="text-[22px] font-medium text-[#333]"
                as="h3"
                text="Финансы | Все пользователи"
              />
              <div className="flex items-center">
                <div className="statistics__search flex items-center justify-between">
                  <input type="text" placeholder="Поиск по сайтам" />
                  <Button children={<Image src={search} alt="search" />} />
                </div>
                <Button
                  className="statistics__change-subbtn"
                  text="Дата и время"
                  children={<Image src={calendar} />}
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-5 pt-5 statistics__info w-full gap-[110px] ">
              <div className="flex flex-col w-3/12">
                <div className="flex items-center">
                  <Image className="me-1 w-[22px] h-[33px]" src={dollar} />
                  <Text
                    className="font-medium text-[32px] text-[#333] mb-1"
                    as="p"
                    text="36,789"
                  />
                </div>
                <Text
                  className="font-normal text-[16px] text-[#333]"
                  as="p"
                  text="Зарегистрированных пользователей"
                />
              </div>
              <div className="flex flex-col w-3/12">
                <div className="flex items-center">
                  <Image className="me-1 w-[22px] h-[33px]" src={dollar} />
                  <Text
                    className="font-medium text-[32px] text-[#333] mb-1"
                    as="p"
                    text="6,789"
                  />
                </div>
                <Text
                  className="font-normal text-[16px] text-[#333]"
                  as="p"
                  text="Оплатили хотя бы один заказ"
                />
              </div>
              <div className="flex flex-col w-3/12">
                <div className="flex items-center">
                  <Image className="me-1 w-[22px] h-[33px]" src={dollar} />
                  <Text
                    className="font-medium text-[32px] text-[#333] mb-1"
                    as="p"
                    text="6,789"
                  />
                </div>
                <Text
                  className="font-normal text-[16px] text-[#333]"
                  as="p"
                  text="Пользователей онлайн"
                />
              </div>
              <div className="flex flex-col w-3/12">
                <div className="flex items-center">
                  <Image className="me-1 w-[22px] h-[33px]" src={dollar} />
                  <Text
                    className="font-medium text-[32px] text-[#333] mb-1"
                    as="p"
                    text="6,789"
                  />
                </div>
                <Text
                  className="font-normal text-[16px] text-[#333]"
                  as="p"
                  text="Регистраций за последний месяц"
                />
              </div>
              <div className="flex flex-col w-3/12">
                <div className="flex items-center">
                  <Image className="me-1 w-[22px] h-[33px]" src={dollar} />
                  <Text
                    className="font-medium text-[32px] text-[#333] mb-1"
                    as="p"
                    text="789.00"
                  />
                </div>
                <Text
                  className="font-normal text-[16px] text-[#333]"
                  as="p"
                  text="Премиум пользователей"
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-[30px] pt-5 w-full gap-[110px] ">
              <div className="flex flex-col w-3/12">
                <div className="flex items-center">
                  <Image className="me-1 w-[22px] h-[33px]" src={dollar} />
                  <Text
                    className="font-medium text-[32px] text-[#333] mb-1"
                    as="p"
                    text="6,789"
                  />
                </div>
                <Text
                  className="font-normal text-[16px] text-[#333]"
                  as="p"
                  text="Зарегистрированных пользователей"
                />
              </div>
              <div className="flex flex-col w-3/12">
                <div className="flex items-center">
                  <Image className="me-1 w-[22px] h-[33px]" src={dollar} />
                  <Text
                    className="font-medium text-[32px] text-[#333] mb-1"
                    as="p"
                    text="6,789"
                  />
                </div>
                <Text
                  className="font-normal text-[16px] text-[#333]"
                  as="p"
                  text="Оплатили хотя бы один заказ"
                />
              </div>
              <div className="flex flex-col w-3/12">
                <div className="flex items-center">
                  <Image className="me-1 w-[22px] h-[33px]" src={dollar} />
                  <Text
                    className="font-medium text-[32px] text-[#333] mb-1"
                    as="p"
                    text="789.00"
                  />
                </div>
                <Text
                  className="font-normal text-[16px] text-[#333]"
                  as="p"
                  text="Пользователей онлайн"
                />
              </div>
              <div className="flex flex-col w-3/12">
                <div className="flex items-center">
                  <Image className="me-1 w-[22px] h-[33px]" src={dollar} />
                  <Text
                    className="font-medium text-[32px] text-[#333] mb-1"
                    as="p"
                    text="6,789.00"
                  />
                </div>
                <Text
                  className="font-normal text-[16px] text-[#333]"
                  as="p"
                  text="Регистраций за последний месяц"
                />
              </div>
              <div className="flex flex-col w-3/12">
                <div className="flex items-center">
                  <Image className="me-1 w-[22px] h-[33px]" src={dollar} />
                  <Text
                    className="font-medium text-[32px] text-[#333] mb-1"
                    as="p"
                    text="6,789.00"
                  />
                </div>
                <Text
                  className="font-normal text-[16px] text-[#333]"
                  as="p"
                  text="Премиум пользователей"
                />
              </div>
            </div>
          </div>

          <div className="primary statistics py-[30px] px-[40px]">
            <div className="flex items-center justify-between">
              <Title
                className="text-[22px] font-medium text-[#333]"
                as="h3"
                text="Публикации"
              />
              <div className="flex items-center">
                <div className="statistics__search flex items-center justify-between">
                  <input type="text" placeholder="Поиск по сайтам" />
                  <Button children={<Image src={search} alt="search" />} />
                </div>
                <Button
                  className="statistics__change-subbtn"
                  text="Дата и время"
                  children={<Image src={calendar} />}
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-5 pt-5 statistics__info w-full gap-[110px] ">
              <div className="flex flex-col w-3/12">
                <Text
                  className="font-medium text-[32px] text-[#333] mb-1"
                  as="p"
                  text="36,789"
                />
                <Text
                  className="font-normal text-[16px] text-[#333]"
                  as="p"
                  text="Зарегистрированных пользователей"
                />
              </div>
              <div className="flex flex-col w-3/12">
                <Text
                  className="font-medium text-[32px] text-[#333] mb-1"
                  as="p"
                  text="6,789"
                />
                <Text
                  className="font-normal text-[16px] text-[#333]"
                  as="p"
                  text="Оплатили хотя бы один заказ"
                />
              </div>
              <div className="flex flex-col w-3/12">
                <Text
                  className="font-medium text-[32px] text-[#333] mb-1"
                  as="p"
                  text="6,789"
                />
                <Text
                  className="font-normal text-[16px] text-[#333]"
                  as="p"
                  text="Пользователей онлайн"
                />
              </div>
              <div className="flex flex-col w-3/12">
                <Text
                  className="font-medium text-[32px] text-[#333] mb-1"
                  as="p"
                  text="36,789"
                />
                <Text
                  className="font-normal text-[16px] text-[#333]"
                  as="p"
                  text="Регистраций за последний месяц"
                />
              </div>
              <div className="flex flex-col w-3/12">
                <Text
                  className="font-medium text-[32px] text-[#333] mb-1"
                  as="p"
                  text="36,789"
                />
                <Text
                  className="font-normal text-[16px] text-[#333]"
                  as="p"
                  text="Премиум пользователей"
                />
              </div>
            </div>
          </div>
          <div className="primary statistics py-[30px] px-[40px]">
            <div className="flex items-center justify-between">
              <Title
                className="text-[22px] font-medium text-[#333]"
                as="h3"
                text="Ресурсы"
              />
              <div className="flex items-center">
                <div className="statistics__search flex items-center justify-between">
                  <input type="text" placeholder="Поиск по сайтам" />
                  <Button children={<Image src={search} alt="search" />} />
                </div>
                <Button
                  className="statistics__change-subbtn"
                  text="Дата и время"
                  children={<Image src={calendar} />}
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-5 pt-5 statistics__info w-full gap-[110px] ">
              <div className="flex flex-col w-3/12">
                <Text
                  className="font-medium text-[32px] text-[#333] mb-1"
                  as="p"
                  text="36,789"
                />
                <Text
                  className="font-normal text-[16px] text-[#333]"
                  as="p"
                  text="Зарегистрированных пользователей"
                />
              </div>
              <div className="flex flex-col w-3/12">
                <Text
                  className="font-medium text-[32px] text-[#333] mb-1"
                  as="p"
                  text="6,789"
                />
                <Text
                  className="font-normal text-[16px] text-[#333]"
                  as="p"
                  text="Оплатили хотя бы один заказ"
                />
              </div>
              <div className="flex flex-col w-3/12">
                <Text
                  className="font-medium text-[32px] text-[#333] mb-1"
                  as="p"
                  text="6,789"
                />
                <Text
                  className="font-normal text-[16px] text-[#333]"
                  as="p"
                  text="Пользователей онлайн"
                />
              </div>
              <div className="flex flex-col w-3/12">
                <Text
                  className="font-medium text-[32px] text-[#333] mb-1"
                  as="p"
                  text="36,789"
                />
                <Text
                  className="font-normal text-[16px] text-[#333]"
                  as="p"
                  text="Регистраций за последний месяц"
                />
              </div>
              <div className="flex flex-col w-3/12">
                <Text
                  className="font-medium text-[32px] text-[#333] mb-1"
                  as="p"
                  text="36,789"
                />
                <Text
                  className="font-normal text-[16px] text-[#333]"
                  as="p"
                  text="Премиум пользователей"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default page;
