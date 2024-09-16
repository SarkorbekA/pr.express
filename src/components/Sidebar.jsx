"use client";
import React, { useState } from "react";
import { Input, Text } from "@/ui";
import russian from "@/assets/imgs/icons/russian-federation.svg";
import britain from "@/assets/imgs/icons/britain.svg";
import deleteIcon from "@/assets/imgs/icons/delete.svg";
import dollar from "@/assets/imgs/icons/dollar.svg";
import Image from "next/image";

function Sidebar() {
  const [value1, setValue1] = useState(10);
  const [value2, setValue2] = useState(80);

  const handleInput1Change = (e) => {
    setValue1(e.target.value);
  };

  const handleInput2Change = (e) => {
    setValue2(e.target.value);
  };

  const gradientStyle = {
    background: `linear-gradient(
      to right, 
      #ddd ${Math.max(0, Math.min(value1, 100))}%, 
      #22c55e ${Math.max(0, Math.min(value1, 100))}%, 
      #22c55e ${Math.max(0, Math.min(value2, 100))}%, 
      #ddd ${Math.max(0, Math.min(value2, 100))}%
    )`,
    zIndex: 1,
  };

  return (
    <section className="sidebar">
      <Text className="sidebar__title mb-5" as="p" text="Выбор языка" />
      <div className="flex flex-col">
        <div className="flex items-center mb-3.5">
          <input type="radio" id="ru" name="fav_language" defaultValue="ru" />
          <span className="custom-radio"></span>
          <label className="me-2.5" htmlFor="ru">
            Русский
          </label>
          <img src={russian.src} alt="russian" />
        </div>
        <div className="flex items-center">
          <input type="radio" id="eng" name="fav_language" defaultValue="eng" />
          <span className="custom-radio"></span>
          <label className="me-2.5" htmlFor="eng">
            Английский
          </label>
          <img src={britain.src} alt="britain" />
        </div>
      </div>

      <div>
        <input
          className="faq-drawer__trigger"
          id="faq-drawer"
          type="checkbox"
        />
        <label className="faq-drawer__title mt-5" htmlFor="faq-drawer">
          <Text className="sidebar__title" as="p" text="Выбор ресурсов" />
        </label>
        <div className="faq-drawer__content-wrapper">
          <div className="faq-drawer__content">
            <ul className="sidebar__list">
              <li className="flex items-center justify-between mb-2.5">
                <div className="form-group flex items-center">
                  <input type="checkbox" id="all" />
                  <label htmlFor="all">Выбрать все</label>
                </div>
                <button>
                  <Image src={deleteIcon} alt="" />
                </button>
              </li>
              <li className="flex items-center justify-between mb-2.5">
                <div className="form-group flex items-center">
                  <input type="checkbox" id="category" />
                  <label htmlFor="category">Ресурс такой-то</label>
                </div>
              </li>
              <li className="flex items-center justify-between mb-2.5">
                <div className="form-group flex items-center">
                  <input type="checkbox" id="category2" />
                  <label htmlFor="category2">Ресурс такой-то</label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <input
          className="faq-drawer__trigger"
          id="category-select"
          type="checkbox"
        />
        <label className="faq-drawer__title" htmlFor="category-select">
          <Text className="sidebar__title" as="p" text="Выбор категории" />
        </label>
        <div className="faq-drawer__content-wrapper">
          <div className="faq-drawer__content">
            <ul className="sidebar__list">
              <li className="flex items-center justify-between mb-2.5">
                <div className="form-group flex items-center">
                  <input type="checkbox" id="all2" />
                  <label htmlFor="all2">Выбрать все</label>
                </div>
                <button>
                  <Image src={deleteIcon} alt="" />
                </button>
              </li>
              <li className="flex items-center justify-between mb-2.5">
                <div className="form-group flex items-center">
                  <input type="checkbox" id="category6" />
                  <label htmlFor="category6">Категория такая-то</label>
                </div>
              </li>
              <li className="flex items-center justify-between mb-2.5">
                <div className="form-group flex items-center">
                  <input type="checkbox" id="category4" />
                  <label htmlFor="category4">
                    Категория такая-то, в две строки
                  </label>
                </div>
              </li>
              <li className="flex items-center justify-between mb-2.5">
                <div className="form-group flex items-center">
                  <input type="checkbox" id="category3" />
                  <label htmlFor="category3">Категория такая-то</label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col mb-[20px]">
          <label className="font-medium text-[16px] text-[#333] mb-[10px] flex">
            Укажите название ресурса
          </label>
          <Input
            className="w-full h-[50px] px-[20px] py-[15px] rounded-[20px] border-[0.5px] border-[#6a6a6a] outline-none focus:border-[#2272d4]"
            placeholder="Название тако"
          />
        </div>
        <div className="flex flex-col mb-[20px]">
          <label className="font-medium text-[16px] text-[#333] mb-[10px] flex">
            Ссылка на сайт
          </label>
          <Input
            className="w-full h-[50px] px-[20px] py-[15px] rounded-[20px] border-[0.5px] border-[#6a6a6a] outline-none focus:border-[#2272d4]"
            placeholder="www.figma.ru"
          />
        </div>
        <div className="flex flex-col mb-[20px]">
          <label className="font-medium text-[16px] text-[#333] mb-[10px] flex">
            Ссылка на сайт
          </label>
          <textarea
            className="w-full h-[126px] px-[20px] py-[15px] rounded-[20px] border-[0.5px] border-[#6a6a6a] outline-none focus:border-[#2272d4]"
            placeholder="www.figma.ru"
          />
        </div>
      </div>

      <div>
        <Text
          className="sidebar__title sidebar__subtitle"
          as="p"
          text="Стоимость"
        />
        <div className="flex items-center gap-2.5">
          <div className="sidebar__summary flex items-center">
            <p>от</p>
            <input type="number" defaultValue={10} />
            <Image src={dollar} alt="" />
          </div>
          <div className="sidebar__summary flex items-center">
            <p>до</p>
            <input type="number" defaultValue={100} />
            <Image src={dollar} alt="" />
          </div>
        </div>
        <div className={"rangeContainer"}>
          <input
            type="range"
            min="0"
            max="100"
            value={value1}
            className={"rangeInput"}
            onChange={handleInput1Change}
            style={gradientStyle}
          />
          <input
            type="range"
            min="0"
            max="100"
            value={value2}
            className={"rangeInput"}
            onChange={handleInput2Change}
            style={gradientStyle}
          />
        </div>
        {/* <div className="flex flex-col mb-[20px]">
          <label className="font-medium text-[16px] text-[#333] mb-[10px] flex">
            Токен
          </label>
          <Input
            className="w-full h-[50px] px-[20px] py-[15px] rounded-[20px] border-[0.5px] border-[#6a6a6a] outline-none focus:border-[#2272d4]"
            placeholder="Такой-то"
          />
        </div>
        <div className="flex flex-col mb-[20px]">
          <label className="font-medium text-[16px] text-[#333] mb-[10px] flex">
            Логин
          </label>
          <Input
            className="w-full h-[50px] px-[20px] py-[15px] rounded-[20px] border-[0.5px] border-[#6a6a6a] outline-none focus:border-[#2272d4]"
            placeholder="Логин"
          />
        </div>
        <div className="flex flex-col mb-[20px]">
          <label className="font-medium text-[16px] text-[#333] mb-[10px] flex">
            Пароль
          </label>
          <Input
            className="w-full h-[50px] px-[20px] py-[15px] rounded-[20px] border-[0.5px] border-[#6a6a6a] outline-none focus:border-[#2272d4]"
            placeholder="12345efsrgdftgyhu"
          />
        </div>
        <button className="sidebar__btn sidebar__btn-apply">
          Синхронизация
        </button>
        <Text
          className="sidebar__title mb-5"
          as="p"
          text="Выберете категории"
        />
        <li className="flex items-center justify-between mb-2.5">
          <div className="form-group flex items-center">
            <input type="checkbox" id="category11" />
            <label htmlFor="category11">Выбрать все</label>
          </div>
        </li>
        <li className="flex items-center justify-between mb-2.5">
          <div className="form-group flex items-center">
            <input type="checkbox" id="category22" />
            <label htmlFor="category22">Категория такая-то</label>
          </div>
        </li>
        <li className="flex items-center justify-between mb-2.5">
          <div className="form-group flex items-center">
            <input type="checkbox" id="category22" />
            <label htmlFor="category22">Категория такая-то</label>
          </div>
        </li>
        <li className="flex items-center justify-between mb-2.5">
          <div className="form-group flex items-center">
            <input type="checkbox" id="category22" />
            <label htmlFor="category22">Категория такая-то</label>
          </div>
        </li>
        <li className="flex items-center justify-between mb-2.5">
          <div className="form-group flex items-center">
            <input type="checkbox" id="category22" />
            <label htmlFor="category22">Категория такая-то</label>
          </div>
        </li>
        <button className="sidebar__btn sidebar__btn-reset">Добавить ресурс</button> */}
        <button className="sidebar__btn sidebar__btn-apply">Применить</button>
        <button className="sidebar__btn sidebar__btn-reset">Сбросить</button>
      </div>
    </section>
  );
}

export default Sidebar;
