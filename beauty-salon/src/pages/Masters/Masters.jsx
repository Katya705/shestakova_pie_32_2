import React from 'react';
import styles from './Masters.module.scss'; 
import natalia from '../../assets/natalia.jpg'; 
import ekaterina from '../../assets/ekaterina.jpg'; 
import kseniya from '../../assets/kseniya.jpg'; 
import anzhelika from '../../assets/anzhelika.jpg'; 


const masters = [
  {
    photo: natalia,
    title: 'Наталья — топ-мастер ногтевого сервиса, специалист по бровям!',
    description:
      'Эксперт с безупречным вкусом и точной техникой. Наталья выполняет маникюр и педикюр любой сложности, владеет современными техниками дизайна и ухода. Также специализируется на оформлении бровей: окрашивание, коррекция, уход — всё для вашего идеального образа.'
  },
  {
    photo: ekaterina,
    title: 'Екатерина — мастер ногтевого сервиса!',
    description:
      'Аккуратность, стиль и забота о клиентах — визитная карточка Екатерины. Специализируется на маникюре, создаёт элегантные образы и тщательно следит за здоровьем ногтей.'
  },
  {
    photo: kseniya,
    title: 'Ксения — мастер ногтевого сервиса, специалист по бровям!',
    description:
      'Ксения — мастер, к которому возвращаются снова и снова. Выполняет маникюр и педикюр, а также оформляет брови: от окрашивания до ухода. Работает в актуальных техниках, умеет услышать пожелания и предложить лучшее.'
  },
  {
    photo: anzhelika,
    title: 'Анжелика — мастер ногтевого сервиса!',
    description:
      'Мягкий подход, щепетильное исполнение и внимание к каждой детали. Анжелика создаёт безупречные образы для ваших рук и ног, сочетая эстетику и комфорт.'
  }
];

const Masters = () => {
  return (
    <div className={styles.wrapper}>

      <h1 className={styles.title}>Наши мастера</h1>

      <div className={styles.masters}>
        {masters.map((master, index) => (
          <div key={index} className={styles.card}>

            <img src={master.photo} alt={master.title} className={styles.photo} />


            <div className={styles.text}>

              <p className={styles.name}>
                <strong>{master.title}</strong>
              </p>

              <p className={styles.description}>{master.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Masters;