import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

export const SearchBox = () => {
  const filterValue = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.box}>
      <p className={s.text}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        placeholder="Search..."
        value={filterValue}
        onChange={handleChange}
      />
    </div>
  );
};
