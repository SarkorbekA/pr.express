import React from "react";
import bg from "@/assets/imgs/png/Rectangle 525.png";
import icon from "@/assets/imgs/icons/Group 788.svg";
import dollar from "@/assets/imgs/icons/dollar.svg";
import infoIcon from "@/assets/imgs/icons/information-circle-contained.svg";
import { Text, Title } from "@/ui";
function Card() {
  return (
    <div className="cardmain__card">
      <Image src={bg} alt="" />
      <div className="cardmain__card-info">
        <Title className="cardmain__card-title" as="h3" text="Цена вопроса не важна, когда сознание наших..." />
        <div className="flex items-center mb-2.5">
          <Image src={icon} alt="" />
          <Text className="cardmain__card-text" as="p" text="Ссылка на ресурс" />
        </div>
        <div className="flex items-center mb-2.5">
          <Image src={infoIcon} alt="" />
          <Text as="p" text="Описание" />
        </div>
        <div className="flex items-center mt-1">
          <Image src={dollar} alt="" />
          <Text className="cardmain__card-subtext" as="p" text="12.00" />
        </div>
      </div>
    </div>
  );
}

export default Card;
