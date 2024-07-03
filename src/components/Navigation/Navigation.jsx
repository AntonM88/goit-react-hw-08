import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./Navigation.module.css";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={s.box}>
      <NavLink className={s.link} to="/">
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink className={s.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </div>
  );
};
