"use client";
import tg from "@/assets/imgs/icons/tg.svg";
import mail from "@/assets/imgs/icons/mail.svg";
function Footer() {
  return (
    <footer className="footer">
      <div className="container-box flex justify-between">
        <ul className="flex flex-col">
          <li className="mb-2.5">
            <a href="#">Главная</a>
          </li>
          <li className="mb-2.5">
            <a href="#">Ресурсы</a>
          </li>
          <li className="mb-2.5">
            <a href="#">Публикации</a>
          </li>
        </ul>
        <p className="w-1/4">
          Если у вас есть вопросы или предложения, не стесняйтесь обращаться к
          нам:
        </p>
        <div>
          <div className="flex items-center mb-4">
            <img className="me-3.5" src={mail} alt="" />
            <p>support@prexpress.io</p>
          </div>
          <div className="flex items-center">
            <img className="me-3.5" src={tg} alt="" />
            <p>Telegram</p>
          </div>
        </div>
        <div className="flex flex-col">
          <a className="mb-2.5" href="#">
            Политика конфиденциальности
          </a>
          <a href="#">Лицензионный договор</a>
        </div>
      </div>
      <div className="container-box">
        <div className="footer__bottom">
          <p>Copyright © 2023 PR Express. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
