import { NavLink } from 'react-router-dom';
import styles from './NavigationMenu.module.scss';

function NavigationMenu() {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" end>Главная</NavLink>
      <NavLink to="/care-tips">Советы по уходу</NavLink>
      <NavLink to="/masters">Мастера</NavLink>
      <NavLink to="/portfolio">Портфолио</NavLink>
      <NavLink to="/services">Услуги</NavLink>
    </nav>
  );
}

export default NavigationMenu;
