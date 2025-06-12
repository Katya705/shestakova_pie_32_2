import { NavLink, useLocation } from 'react-router-dom'; // Импортируем NavLink для создания ссылок и useLocation для получения текущего маршрута
import styles from './NavigationMenu.module.scss';

function NavigationMenu() {
  
  const location = useLocation();


  const links = [
    { to: '/', label: 'Главная', exact: true },
    { to: '/care-tips', label: 'Советы по уходу' },
    { to: '/masters', label: 'Мастера' },
    { to: '/portfolio', label: 'Портфолио' },
    { to: '/services', label: 'Услуги' },
  ];

  return (
    <nav className={styles.navbar}>
      {links.map(({ to, label, exact }) => {
       
        const isActive = exact
          ? location.pathname === to
          : location.pathname.startsWith(to);

        return !isActive && (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => (isActive ? 'active' : '')}
            end={exact} 
          >
            {label}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default NavigationMenu;