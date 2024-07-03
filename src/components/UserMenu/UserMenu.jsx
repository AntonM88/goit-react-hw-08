import { useDispatch, useSelector } from "react-redux";
import { logOutThunk } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={s.box}>
      <p className={s.title}>Welcome, {user.name}</p>
      <button
        className={s.btn}
        type="button"
        onClick={() => dispatch(logOutThunk())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
