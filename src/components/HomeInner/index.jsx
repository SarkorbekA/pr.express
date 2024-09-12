import React, { useState, useRef } from 'react';
import styles from './HomeInner.module.scss'
import Link from 'next/link';
import { ST } from 'next/dist/shared/lib/utils';

const HomeInner = () => {
  const features = [
    { number: '01', title: 'Выберите пакет', description: 'Ознакомьтесь с нашими тарифами и выберите тот, который подходит именно вам' },
    { number: '02', title: 'Подготовьте материал', description: 'Ознакомьтесь с нашими тарифами и выберите тот, который подходит именно вам' },
    { number: '03', title: 'Отправьте нам', description: 'Ознакомьтесь с нашими тарифами и выберите тот, который подходит именно вам' },
    { number: '04', title: 'публикация:', description: 'Ознакомьтесь с нашими тарифами и выберите тот, который подходит именно вам' },
  ];

  return <>
    <div className={styles.header}>
      <div className="container">
        <div className={styles.headerTop}>
          <a href='/' className={styles.headerTopLogo}>
            <img src="./logo.svg" alt="logo" />
            <span></span>
            <h3>PR Express</h3>
          </a>
          <div className={styles.headerSide}>
            <div className={styles.headerAuth}>
              <button className={styles.headerAuthBtn}>Вход </button>
              /
              <button className={styles.headerAuthBtn}>Регистрация</button>
            </div>
            <div className={styles.headerSocial}>
              <Link className={styles.headerSocialItem} href='/'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="11.5" stroke="white" />
                  <path d="M17.5239 7.39774L17.5362 7.39347L17.5484 7.38856C17.6208 7.35927 17.6768 7.35496 17.7117 7.35847C17.7456 7.36187 17.758 7.37186 17.7603 7.37387L17.7604 7.37393C17.7616 7.37493 17.7728 7.38408 17.7804 7.41968C17.7891 7.45985 17.7937 7.54005 17.7576 7.66941L17.755 7.6788L17.7528 7.68829L15.6842 16.4063L15.6838 16.4082C15.6582 16.5181 15.6267 16.579 15.6052 16.6093C15.5864 16.6357 15.5762 16.6383 15.5762 16.6383C15.5722 16.6399 15.4895 16.6673 15.2752 16.5669L12.1523 14.5041L11.8353 14.2947L11.5486 14.544L10.2987 15.6309L10.4284 13.8981L16.1051 9.31645C16.1904 9.24848 16.375 9.08239 16.3861 8.81699C16.4016 8.44909 16.1056 8.28675 15.9649 8.24355C15.8166 8.19801 15.6656 8.20639 15.5466 8.22843C15.4186 8.25216 15.2855 8.29938 15.1568 8.36942L15.1568 8.36937L15.1501 8.37315L8.11423 12.343L5.38854 11.5826L17.5239 7.39774ZM15.7399 9.21025C15.7399 9.21032 15.7386 9.2105 15.7359 9.21056C15.7387 9.21021 15.74 9.21018 15.7399 9.21025ZM15.4836 8.53301C15.4836 8.53299 15.4833 8.53328 15.4826 8.53387L15.4836 8.53301Z" fill="white" stroke="white" />
                </svg>
              </Link>
            </div>
            <div className={styles.lang}>
              <button className={styles.langButton}>
                <h3>RU</h3>
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L7 7L13 1" stroke="white" stroke-linecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.mainTop}>
          <h2 className={styles.mainSubTitle}>Путь к успешной публикации - </h2>
          <div className={styles.mainSubTitleImage}>
            <svg width="92" height="105" viewBox="0 0 92 105" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M86.3861 6.54776C59.6035 -0.685058 13.4375 17.4218 6.87248 27.5304C-3.39142 43.3345 21.1407 48.0296 29.8186 50.1569C52.9626 52.2224 96.6775 58.8251 86.3856 68.7105C76.0932 78.5954 34.4546 87.4412 16.3714 90.3659M16.3714 90.3659L35.3441 73.5407M16.3714 90.3659L36.2944 100.874" stroke="url(#paint0_linear_37_2984)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
              <defs>
                <linearGradient id="paint0_linear_37_2984" x1="18.2103" y1="15.7505" x2="79.2558" y2="75.9455" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#49D46F" />
                  <stop offset="1" stop-color="#25BE9F" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <h1 className={styles.mainTitle}>
          <span>PR Express</span>
          <img src="./main-text.png" alt="" />
        </h1>
        <div className={styles.mainBottom}>
          <button className={styles.mainBtn}>
            <h3>Написать статью</h3>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.93846 18L15.2308 4.70769V16.6154H18V0H1.38461V2.76923H13.2923L0 16.0615L1.93846 18Z" fill="white" />
            </svg>
          </button>
          <div className={styles.mainText}>
            Наша миссия - помогать компаниям и индивидуальным предпринимателям донести свои идеи до максимально широкой аудитории
          </div>
        </div>
      </div>
    </div>
    <section className={styles.why}>
      <h2 className={styles.whyTitle}>
        Почему
        <span>выбирают</span>
        нас?
      </h2>
      <div className="container">
        <div className={styles.whyContent}>
          <div className={styles.whyContentLeft}>
            <div className={`${styles.whyContentItem} ${styles.first}`}>
              <span className={styles.whyContentItemImage}>
                <img src="./item1.png" alt="" />
              </span>
              <h3 className={styles.whyContentItemTitle}>
                Качество
              </h3>
              <p className={styles.whyContentItemText}>
                Мы тщательно проверяем каждую публикацию на соответствие стандартам качества и актуальности
              </p>
            </div>
            <div className={`${styles.whyContentItem} ${styles.second}`}>
              <span className={styles.whyContentItemImage}>
                <img src="./item2.png" alt="" />
              </span>
              <h3 className={styles.whyContentItemTitle}>
                Доступность
              </h3>
              <p className={styles.whyContentItemText}>
                Наши цены самые конкурентоспособные на рынке. Мы предлагаем различные пакеты услуг, чтобы удовлетворить потребности каждого клиента
              </p>
            </div>
          </div>
          <div className={styles.whyContentRight}>
            <h3 className={styles.whyContentRightText}>
              <span>PR Express</span>  - это платформа для массовой публикации статей и пресс-релизов. Мы помогаем компаниям и индивидуальным предпринимателям донести свои идеи до максимально широкой аудитории, обеспечивая быстрое и качественное распространение информации.
            </h3>
            <div className={styles.whyContentCenter}>
              <div className={`${styles.whyContentItem} ${styles.third}`}>
                <span className={styles.whyContentItemImage}>
                  <img src="./item3.png" alt="" />
                </span>
                <h3 className={styles.whyContentItemTitle}>
                  Широкий охват
                </h3>
                <p className={styles.whyContentItemText}>
                  Ваша публикация будет распространена более чем на 100 новостных сайтов России и зарубежья
                </p>
              </div>
              <div className={`${styles.whyContentItem} ${styles.fourth}`}>
                <span className={styles.whyContentItemImage}>
                  <img src="./item4.png" alt="" />
                </span>
                <h3 className={styles.whyContentItemTitle}>
                  Скорость
                </h3>
                <p className={styles.whyContentItemText}>
                  Наши процессы оптимизированы для обеспечения максимальной скорости публикации. Ваш пресс-релиз или статья будет опубликована в кратчайшие сроки                </p>
              </div>
              <div className={`${styles.whyContentItem} ${styles.fifth}`}>
                <span className={styles.whyContentItemImage}>
                  <img src="./item5.png" alt="" />
                </span>
                <h3 className={styles.whyContentItemTitle}>
                  Анонимность
                </h3>
                <p className={styles.whyContentItemText}>
                  Наши процессы оптимизированы для обеспечения максимальной скорости публикации. Ваш пресс-релиз или статья будет опубликована в кратчайшие сроки                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    <section className={styles.features}>
      <h2 className={styles.featuresTitle}>
        Публикуй
        <span>Без</span>
        ограничений
      </h2>
      <div className={`${styles.featuresTop} container`}>
        <div className={styles.featuresTopContent}>
          <div className={styles.featuresTopBox}>
            <div className={styles.featuresTopBoxItem}>
              1
            </div>
            <div className={styles.featuresTopBoxItem}>
              2
            </div>
          </div>
          <div className={styles.featuresTopArrow}>
            <svg width="101" height="53" viewBox="0 0 101 53" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.77936 49.0019C4.77936 49.0019 6.85762 27.1882 31.4394 13.1323C56.0212 -0.923541 79.6668 15.7745 96.2007 24.5784M96.2007 24.5784L76.7285 28.0485M96.2007 24.5784L86.6357 4.80678" stroke="#2272D4" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div className={styles.featuresTopBox}>
            <div className={styles.featuresTopBoxItem}>
              3
            </div>
            <div className={styles.featuresTopBoxItem}>
              4
            </div>
          </div>
        </div>
        <div className={styles.featuresTopTexts}>
          <div className={styles.featuresTopTextsItem}>Логотип крупнейшей компании по производству мыльных пузырей бодрит</div>
          <div className={styles.featuresTopTextsItem}>Реализация намеченных плановых заданий оказалась чрезвычайно полезной</div>
          <div className={`${styles.featuresTopTextsItem} ${styles.middle}`}>Коронованный герцог графства не позволил союзу развалиться</div>
          <div className={styles.featuresTopTextsItem}>Финансовый мир очнулся: базовый вектор развития продолжает удивлять</div>
        </div>
      </div>
      <div className={`${styles.featuresContent} container`}>
        <div className={styles.featuresContentHeader}>
          <button className={styles.featuresContentButton}>
            порядок действий
          </button>
          <h3 className={styles.featuresContentTitle}>как это работает?</h3>
        </div>
        <ul className={styles.featuresList}>
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              number={feature.number}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </ul>
        <button className={styles.featuresButton}>
          <h3>Написать статью</h3>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.93846 18L15.2308 4.70769V16.6154H18V0H1.38461V2.76923H13.2923L0 16.0615L1.93846 18Z" fill="white" />
          </svg>
        </button>
      </div>
    </section>
    <section className={styles.feedback}>
      <div className="container">
        <div className={styles.feedbackHeader}>
          <h2 className={styles.feedbackTitle}>
            Отзывы
            <span>наших</span>
            клиентов
          </h2>
          <div className={styles.feedbackArrows}>
            <button>
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.3586 13.3707H5.56042L13.9804 21.7907L12.0223 23.7489L0.273438 12L12.0223 0.251149L13.9804 2.20929L5.56042 10.6293H24.3586V13.3707Z" fill="#333333" />
              </svg>
            </button>
            <button>
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.643371 10.6293H19.4415L11.0215 2.20929L12.9797 0.251149L24.7285 12L12.9797 23.7489L11.0215 21.7907L19.4415 13.3707H0.643371V10.6293Z" fill="white" />
              </svg>
            </button>
          </div>
        </div>
        <ul className={styles.feedbackContent}>
          <li className={styles.feedbackContentItem}>
            <div className={styles.feedbackContentItemStars}>
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <h3>Елизавета кудрявцева</h3>
            <p>Как принято считать, действия представителей оппозиции являются только методом политического участия и объективно рассмотрены соответствующими инстанциями. А также явные признаки победы институционализации, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут подвергнуты целой серии независимых исследований</p>
          </li>
          <li className={styles.feedbackContentItem}>
            <div className={styles.feedbackContentItemStars}>
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <h3>Елизавета кудрявцева</h3>
            <p>Как принято считать, действия представителей оппозиции являются только методом политического участия и объективно рассмотрены соответствующими инстанциями. А также явные признаки победы институционализации, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут подвергнуты целой серии независимых исследований</p>
          </li>
          <li className={styles.feedbackContentItem}>
            <div className={styles.feedbackContentItemStars}>
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <h3>Елизавета кудрявцева</h3>
            <p>Как принято считать, действия представителей оппозиции являются только методом политического участия и объективно рассмотрены соответствующими инстанциями. А также явные признаки победы институционализации, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут подвергнуты целой серии независимых исследований</p>
          </li>
        </ul>
      </div>

    </section>
  </>
}

const FeatureItem = ({ number, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={styles.featuresListItem}>
      <div className={styles.featuresListItemTop} onClick={toggleContent}>
        <h3 className={styles.featuresListItemNum}>{number}</h3>
        <div className={styles.featuresListItemBox}>
          <h3>{title}</h3>
          <svg style={{
            transform: isOpen ? `rotate(-180deg)` : 'rotate(0)',
            transition: "0.3s all"
          }}
            width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 1L10 10L1 1" stroke="white" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div
        ref={contentRef}
        className={styles.featuresListItemContent}
        style={{
          height: isOpen ? `${contentRef.current.scrollHeight}px` : '0px',
          overflow: 'hidden',
          transition: 'height 0.3s ease'
        }}
      >
        <span></span>
        <p>{description}</p>
      </div>
    </li>
  );
};

const Star = () => {
  return (
    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.4041 8.69845C10.0482 8.72583 9.69078 8.72583 9.3349 8.69845C8.32001 8.66502 7.30408 8.68266 6.29098 8.75128C5.63596 8.7945 4.90388 8.87134 4.10918 8.9914C3.71424 9.04903 3.29522 9.12107 2.8762 9.20751C2.46623 9.26335 2.08313 9.44263 1.77808 9.72138C1.64241 9.88436 1.54445 10.0752 1.49118 10.2802C1.4379 10.4852 1.43061 10.6994 1.46983 10.9076C1.54728 11.3872 1.72802 11.8443 1.99963 12.2475C2.62556 13.1489 3.41643 13.9245 4.33073 14.5335C5.37709 15.2332 6.36304 16.0187 7.27833 16.8819C7.78753 17.374 8.17786 17.9751 8.4198 18.6397C8.54241 19.0009 8.58674 19.3839 8.54984 19.7635C8.50848 20.124 8.43761 20.4806 8.33792 20.8296C7.97188 22.1743 7.5962 23.5671 7.2109 24.9982C7.02788 25.709 6.79188 26.439 6.65702 27.1497C6.59953 27.4883 6.59953 27.8341 6.65702 28.1727C6.71534 28.4869 6.86431 28.7773 7.08567 29.0083C7.189 29.1127 7.31441 29.1927 7.45273 29.2426C7.59106 29.2925 7.73881 29.3109 7.88518 29.2965C8.2198 29.2492 8.53659 29.1169 8.8051 28.9123C9.41696 28.431 9.9684 27.8779 10.4475 27.265C10.9592 26.6335 11.429 25.9693 11.8538 25.2768C12.0706 24.9262 12.2825 24.5708 12.4848 24.2058C12.6871 23.8408 12.8605 23.4902 13.1013 23.0724C13.2407 22.8312 13.4396 22.6295 13.6792 22.4865C13.9522 22.3355 14.2726 22.2943 14.5751 22.3712C15.0469 22.5258 15.4746 22.791 15.8225 23.1444C16.4679 23.7111 17.1422 24.2586 17.8357 24.7869C19.2324 25.8579 20.7088 26.8212 22.2523 27.6684C22.5724 27.8544 22.9432 27.935 23.3119 27.8989C23.472 27.8628 23.6202 27.7865 23.7424 27.6773C23.8647 27.568 23.9568 27.4294 24.0103 27.2746C24.3137 26.6167 24.044 25.8002 23.7309 24.9934C23.0887 23.3445 22.4755 21.7245 21.8911 20.1333C21.5228 19.3242 21.2948 18.4586 21.2168 17.5735C21.2132 17.1102 21.3044 16.651 21.485 16.2241C21.6655 15.7972 21.9315 15.4115 22.2667 15.0906C22.8745 14.5013 23.5599 13.9972 24.3041 13.5922C24.9791 13.2107 25.6334 12.7939 26.2643 12.3436C26.8645 11.9229 27.3766 11.3895 27.7718 10.7731C28.1407 10.2014 28.3271 9.53163 28.3064 8.85213C28.3116 8.7275 28.2851 8.6036 28.2294 8.49194C28.2294 8.46312 28.1716 8.43431 28.0126 8.42951H26.9386L24.8098 8.46792L20.7689 8.54476C20.4197 8.56688 20.0692 8.53776 19.7285 8.45832C19.3681 8.35591 19.0483 8.14448 18.8134 7.8532C18.4508 7.33114 18.1607 6.76247 17.9513 6.16271C17.4697 5.07254 17.0603 4.03039 16.6509 3.04587C16.4873 2.57801 16.2741 2.12885 16.0151 1.70597C15.9695 1.62719 15.9038 1.56178 15.8248 1.51631C15.7457 1.47083 15.6561 1.44689 15.5648 1.44689C15.4736 1.44689 15.3839 1.47083 15.3049 1.51631C15.2258 1.56178 15.1602 1.62719 15.1145 1.70597C14.8592 2.05872 14.6413 2.43694 14.4643 2.83456C14.2765 3.22357 14.1079 3.60297 13.9538 3.97276C13.6738 4.64629 13.4294 5.33399 13.2217 6.03304C13.0782 6.61232 12.8681 7.17313 12.5956 7.70432C12.3804 8.0975 12.0668 8.42841 11.6853 8.66483C11.4513 8.81103 11.1852 8.89838 10.9098 8.91936C10.8174 8.93483 10.7225 8.92487 10.6353 8.89055C10.9802 8.85039 11.3105 8.72854 11.5986 8.53516C11.9398 8.28628 12.2131 7.95604 12.3933 7.57466C12.6391 7.05369 12.828 6.50786 12.9568 5.9466C13.1429 5.22998 13.3696 4.52448 13.6359 3.83349C13.7804 3.45409 13.9441 3.06028 14.1175 2.66167L14.4113 2.05175C14.5146 1.82518 14.6456 1.61224 14.8014 1.41782C14.8924 1.29838 15.0077 1.19943 15.1396 1.12743C15.2716 1.05543 15.4173 1.01201 15.5672 1C15.7263 1.00184 15.8828 1.04003 16.0248 1.11163C16.1667 1.18323 16.2903 1.28634 16.386 1.41302C16.5548 1.63421 16.6941 1.87637 16.8002 2.1334L17.1133 2.85378C17.5435 3.83349 17.9947 4.86603 18.4667 5.9514C18.6636 6.49527 18.9325 7.01049 19.2662 7.48341C19.4282 7.68428 19.6486 7.83023 19.8971 7.90123C20.184 7.95757 20.4775 7.97374 20.7689 7.94925L24.805 7.82919L26.9338 7.77156L28.0415 7.74274C28.1694 7.74225 28.2964 7.76336 28.4172 7.80518C28.5711 7.85674 28.7044 7.95602 28.7977 8.08853C28.9273 8.29779 28.9956 8.53896 28.9952 8.78489C29.036 9.61353 28.8172 10.4343 28.369 11.1333C27.9313 11.827 27.3639 12.4303 26.6978 12.9103C25.407 13.8996 23.8513 14.4903 22.7821 15.5901C22.5148 15.8425 22.3029 16.1473 22.1595 16.4853C22.0161 16.8233 21.9444 17.1873 21.9489 17.5543C22.029 18.3524 22.2423 19.1315 22.5798 19.8595C23.1867 21.4604 23.8048 23.0804 24.4341 24.7197C24.6119 25.1494 24.749 25.5948 24.8435 26.05C24.95 26.5616 24.9014 27.0932 24.7038 27.5772C24.5902 27.8327 24.4264 28.0629 24.2222 28.2543C24.0038 28.4516 23.7358 28.586 23.4467 28.6433C22.9121 28.7199 22.367 28.6187 21.8959 28.3552C20.3062 27.4819 18.7862 26.488 17.3493 25.3824C16.6429 24.8445 15.9606 24.2842 15.3023 23.7015C15.0496 23.4383 14.7422 23.2334 14.4017 23.1012C14.1271 23.034 13.9489 23.1396 13.7418 23.4614C13.5347 23.7832 13.3469 24.201 13.1398 24.5612C12.9327 24.9214 12.6919 25.3104 12.4751 25.661C12.0283 26.3764 11.5344 27.0615 10.9965 27.7116C10.7316 28.0334 10.4523 28.3456 10.1585 28.6433C9.86482 28.9547 9.54229 29.2377 9.19522 29.4886C8.82031 29.7632 8.38073 29.9369 7.9189 29.9928C7.67188 30.0155 7.42287 29.9843 7.18917 29.9013C6.95546 29.8184 6.74265 29.6857 6.56551 29.5126C6.24231 29.1798 6.02599 28.7584 5.9442 28.3024C5.86677 27.8816 5.86677 27.4504 5.9442 27.0297C6.10314 26.2325 6.33914 25.5409 6.52698 24.8205L7.69253 20.6615C7.92028 20.0765 7.95901 19.4351 7.80331 18.827C7.60205 18.2491 7.27281 17.7238 6.84004 17.2902C5.95884 16.4399 5.00836 15.664 3.99841 14.9705C3.04712 14.3061 2.23011 13.4686 1.59024 12.502C1.29157 12.035 1.0977 11.5091 1.02191 10.9604C0.979802 10.6876 0.99854 10.4088 1.07679 10.144C1.15505 9.87924 1.29089 9.6349 1.47465 9.42843C1.84515 9.09124 2.31113 8.87653 2.80877 8.8137C3.24706 8.73686 3.66608 8.67923 4.07065 8.62641C4.87498 8.53036 5.61669 8.47272 6.28616 8.45351C7.30962 8.41413 8.33457 8.44302 9.35417 8.53996C9.70901 8.55328 10.0612 8.60645 10.4041 8.69845Z" fill="url(#paint0_linear_55_16770)" stroke="url(#paint1_linear_55_16770)" stroke-width="2" />
      <defs>
        <linearGradient id="paint0_linear_55_16770" x1="1" y1="7.59091" x2="26.6862" y2="8.71975" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1764DB" />
          <stop offset="1" stop-color="#80E39B" />
        </linearGradient>
        <linearGradient id="paint1_linear_55_16770" x1="1" y1="7.59091" x2="26.6862" y2="8.71975" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1764DB" />
          <stop offset="1" stop-color="#80E39B" />
        </linearGradient>
      </defs>
    </svg>
  );
};



export default HomeInner