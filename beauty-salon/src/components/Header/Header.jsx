import styles from './Header.module.scss';
import logo from '../../assets/logo.png'; // путь к изображению

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Логотип салона" className={styles.logo} />
    </header>
  );
}

export default Header;
