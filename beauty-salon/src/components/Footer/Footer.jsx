import styles from './Footer.module.scss';
import logo from '../../assets/logo.png';
import telegramIcon from '../../assets/telegram.png';
import instagramIcon from '../../assets/instagram.png';
import whatsappIcon from '../../assets/whatsapp.png';
import phoneIcon from '../../assets/phone.png';
import locationIcon from '../../assets/location.png';

function Footer() {
  return (
    <footer className={styles.footer}>
      {}
      <div className={styles.container}>

        {}
        <div className={styles.icons}>
          {/* Ссылка на Telegram, открывается в новой вкладке */}
          <a href="https://t.me/Na_nogt" target="_blank" rel="noopener noreferrer">
            <img src={telegramIcon} alt="Telegram" />
          </a>
          {/* Ссылка на Instagram */}
          <a href="https://www.instagram.com/na.nogtyah.brn?igsh=MWRrbnk2MTI0bHR1Zg==" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          {/* Ссылка на WhatsApp чат */}
          <a href="https://wa.me/+79831797079" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" />
          </a>
          {/* Ссылка для звонка по телефону */}
          <a href="tel:+79123456789">
            <img src={phoneIcon} alt="Phone" />
          </a>
        </div>

        {}
        <div className={styles.center}>
          <img src={logo} alt="Логотип" className={styles.logo} />
        </div>

        {}
        <div className={styles.address}>
          <img src={locationIcon} alt="Location" />
          <p>
            г. Барнаул <br /> ул. Чкалова 89
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;