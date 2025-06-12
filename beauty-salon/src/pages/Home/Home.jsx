import React from 'react';
import styles from './Home.module.scss'; 
import main1 from '../../assets/main1.jpg'; 
import main2 from '../../assets/main2.jpg'; 
import master from '../../assets/master.jpg'; 

const Home = () => {
  return (
 
    <section className={styles.home}>

      {}
      <div className={styles.intro}>
        {}
        <img src={main1} alt="Ногти" className={styles.imageCircle} />

        {}
        <div className={styles.text}>
          <p>
            Салон красоты «На Ногтях» — это пространство стиля и ухода, где ваша внешность раскрывается
            во всей своей гармонии. Мы предлагаем комплексный подход к красоте: профессиональный маникюр
            и педикюр, оформление бровей и уход за ресницами — всё в одном уютном месте.
          </p>
          <p>
            Наши мастера — специалисты с опытом и тонким чувством стиля. Мы создаём образы,
            подчёркивающие индивидуальность, и стремимся к тому, чтобы каждый гость чувствовал
            себя уверенно и ухоженно.
          </p>
          <p>
            Мы работаем только с качественными материалами, соблюдаем все нормы стерильности
            и индивидуальный подход к каждому клиенту.
          </p>
        </div>
      </div>

      {}
      <div className={styles.intro}>
        {}
        <div className={styles.text}>
          <p>
            «На Ногтях» — это больше, чем салон. Это место, куда хочется возвращаться
            за красотой, вдохновением и уютом. Приходите — и почувствуйте разницу!
          </p>
        </div>
      
        <img src={main2} alt="Брови" className={styles.imageCircle} />
      </div>

      {}
      <div className={styles.promo}>
        {}
        <div className={styles.promoCircle}>
          <svg viewBox="0 0 400 400" className={styles.promoSvg}>
            <defs>
              {}
              <path id="circlePath" d="M200,200m-180,0a180,180 0 1,1 360,0a180,180 0 1,1 -360,0" />
            </defs>
            {}
            <text>
              <textPath href="#circlePath" startOffset="0%">
                {'АКЦИЯ! АКЦИЯ! АКЦИЯ! АКЦИЯ! АКЦИЯ! АКЦИЯ!'}
              </textPath>
            </text>
          </svg>

          {}
          <img src={master} alt="Мастер Екатерина" className={styles.promoImage} />
        </div>

        {}
        <div className={styles.promoText}>
          <p>Скидка 25% на первое посещение к мастеру Екатерина</p>
          <p>
            Познакомьтесь с нашим мастером Екатериной — специалистом по маникюру,
            которая знает, как подчеркнуть вашу естественную красоту. Количество
            мест по акции ограничено — успейте записаться!
          </p>
          <p>«На Ногтях» — с заботой о вашем стиле.</p>
        </div>
      </div>

      {}
      <a
        href="https://dikidi.ru/ru/profile/na_nogtyax_1044088"
        target="_blank"          
        rel="noopener noreferrer" 
        className={styles.button} 
      >
        Записаться
      </a>

      {}
      <p className={styles.final}>
        Удобное время — в один клик. Забронируйте свой сеанс красоты прямо сейчас!
      </p>
    </section>
  );
};

export default Home;