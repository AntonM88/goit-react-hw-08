import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <header className={s.header}>
      <a>
        <img
          className={s.logo}
          src="https://static-00.iconduck.com/assets.00/phone-book-emoji-1602x2048-gw2vxxsx.png"
        />
      </a>
      <p className={s.user}>Welcome NAME</p>
      <nav>
        <ul className={s.nav_list}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
