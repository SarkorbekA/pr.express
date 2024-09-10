import React, { useState, useRef } from 'react';
import styles from './HomeInner.module.scss'
import Link from 'next/link';

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
          <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <p>{description}</p>
      </div>
    </li>
  );
};


export default HomeInner