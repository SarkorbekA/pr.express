import Footer from "@/components/Footer";
import { Button, Text, Title } from "@/ui";
import React from "react";
import plus from "@/assets/imgs/icons/plus.svg";
import info from "@/assets/imgs/icons/information-circle-contained.svg";
import Image from "next/image";
import Header from "@/components/Header";
import "@/styles/style.scss";
import TopBar from "@/components/TopBar";
import { Input } from "@/ui/Input/Input";

function page() {
  return (
    <>
      <Header />
      <TopBar />
      <main>
        <div className="container-box flex gap-[20px]">
          <div className="primary py-[30px] px-[40px] w-[640px] flex flex-col items-center">
            <div className="flex items-center justify-between w-full mb-[30px] pb-[20px] border-b-[0.5px] border-[#6a6a6a]">
              <Title
                className="font-medium text-[18px] text-[#333] "
                as="h4"
                text="Новый кошелёк"
              />
              <Button
                children={<Image className="w-[24px] h-[24px]" src={plus} />}
              />
            </div>
            <Input
              className="mb-[20px] px-[20px] py-[15px]flex items-center w-[360px] h-[50px] border-[0.5px] border-[#6a6a6a] rounded-[20px] outline-none"
              placeholder="USDT TRC-20"
            />
            <div>
              <label className="flex items-center justify-between w-full mb-[10px] text-[#333] text-[16px]">
                <Text as="span" text="Токен" />
                <Image src={info} />
              </label>
              <Input
                className="mb-[20px] px-[20px] py-[15px]flex items-center w-[360px] h-[50px] border-[0.5px] border-[#6a6a6a] rounded-[20px] outline-none"
                placeholder="Такой-то"
              />
            </div>
            <div>
              <label className="flex items-center justify-between w-full mb-[10px] text-[#333] text-[16px]">
                <Text as="span" text="Логин" />
              </label>
              <Input
                className="mb-[20px] px-[20px] py-[15px]flex items-center w-[360px] h-[50px] border-[0.5px] border-[#6a6a6a] rounded-[20px] outline-none"
                placeholder="GGgRhh"
              />
            </div>
            <div>
              <label className="flex items-center justify-between w-full mb-[10px] text-[#333] text-[16px]">
                <Text as="span" text="Пароль" />
              </label>
              <Input
                className="mb-[20px] px-[20px] py-[15px]flex items-center w-[360px] h-[50px] border-[0.5px] border-[#6a6a6a] rounded-[20px] outline-none"
                placeholder="12345efsrgdftgyhu"
              />
            </div>
            <Button
              className="w-[360px] mt-[10px] h-[50px] flex items-center justify-center bg-[#2272d4] text-white text-[16px] rounded-[20px]"
              text="Добавить кошелёк"
            />
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="primary py-[30px] px-[40px] w-[640px] flex flex-col items-center">
              <div className="flex items-center justify-between w-full mb-[30px] pb-[20px] border-b-[0.5px] border-[#6a6a6a]">
                <Title
                  className="font-medium text-[18px] text-[#333] "
                  as="h4"
                  text="Новый кошелёк"
                />
                <Button
                  children={<Image className="w-[24px] h-[24px]" src={plus} />}
                />
              </div>
              <Input
                className="mb-[20px] px-[20px] py-[15px]flex items-center w-[360px] h-[50px] border-[0.5px] border-[#6a6a6a] rounded-[20px] outline-none"
                placeholder="Имя Фамилия"
              />
              <Input
                className="mb-[20px] px-[20px] py-[15px]flex items-center w-[360px] h-[50px] border-[0.5px] border-[#6a6a6a] rounded-[20px] outline-none"
                placeholder="Эл. почта"
              />
              <Input
                className="mb-[20px] px-[20px] py-[15px]flex items-center w-[360px] h-[50px] border-[0.5px] border-[#6a6a6a] rounded-[20px] outline-none"
                placeholder="Пароль"
              />
              <Input
                className="mb-[20px] px-[20px] py-[15px]flex items-center w-[360px] h-[50px] border-[0.5px] border-[#6a6a6a] rounded-[20px] outline-none"
                placeholder="Повторить пароль"
              />
              <Button
                className="w-[360px] mt-[10px] h-[50px] flex items-center justify-center bg-[#333] text-white text-[16px] rounded-[20px]"
                text="Изменить"
              />
            </div>
            <div className="primary py-[30px] px-[40px] w-[640px] flex items-center justify-end">
              <Button className="font-medium text-[#333] text-[16px] me-[30px]" text="Выйти" />
              <Button className="font-medium text-[#2272d4] text-[16px] underline decoration-1" text="Удалить профиль" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default page;
