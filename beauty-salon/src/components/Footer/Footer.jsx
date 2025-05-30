import styles from './Footer.module.scss';
import logo from '../../assets/logo.png'; // путь к картинке

function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="Логотип в подвале" className={styles.logo} />
    </footer>
  );
}

export default Footer;
