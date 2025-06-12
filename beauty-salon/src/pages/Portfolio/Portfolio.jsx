import { useState, useEffect } from 'react';
import axios from 'axios'; 
import styles from './Portfolio.module.scss';

function Portfolio() {
  // useState — хук для создания управление состояния
  const [works, setWorks] = useState([]);

  // useEffect — хук для выполнения побочных эффектов в функциональных компонентах
  useEffect(() => {
    //запрос на сервер
    axios.get('http://localhost:3001/portfolio')
      .then(response => {
        setWorks(response.data);
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }, []); 

  const manicureImages = works.filter(work => work.imageUrl.toLowerCase().includes('manicure'));
  const browsImages = works.filter(work => work.imageUrl.toLowerCase().includes('brow'));
  const studioImages = works.filter(work => work.imageUrl.toLowerCase().includes('studio'));

  return (
    <div className={styles.portfolio}>
      <h1 className={styles.title}>Наши работы</h1>

      <section>
        <h2>Маникюр/Педикюр</h2>
        <div className={styles.scrollContainer}>
          {manicureImages.map(work => (
            <img key={work.id} src={work.imageUrl} alt="" className={styles.image} />
          ))}
        </div>
      </section>

      <section>
        <h2>Брови</h2>
        <div className={styles.scrollContainer}>
          {browsImages.map(work => (
            <img key={work.id} src={work.imageUrl} alt="" className={styles.image} />
          ))}
        </div>
      </section>

      <section>
        <h2>Фотографии нашей студии</h2>
        <div className={styles.scrollContainer}>
          {studioImages.map(work => (
            <img key={work.id} src={work.imageUrl} alt="" className={styles.image} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Portfolio;