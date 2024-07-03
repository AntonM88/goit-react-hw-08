import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <div className={s.box}>
      <NavLink className={s.link} to="/login">
        Login
      </NavLink>

      <NavLink className={s.link} to="/register">
        Register
      </NavLink>
    </div>
  );
};
