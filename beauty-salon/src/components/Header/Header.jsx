
import styles from './Header.module.scss';
// Импортируем логотип — путь к изображению
import logo from '../../assets/logo.png';

function Header() {
  return (
    <header className={styles.header}>
      {}
      <img 
        src={logo} 
        alt="Логотип салона" 
        className={styles.logo} 
      />
    </header>
  );
}

export default Header;