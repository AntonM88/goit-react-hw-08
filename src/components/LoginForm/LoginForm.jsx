import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { loginThunk } from "../../redux/auth/operations";
import s from "./LoginForm.module.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (value) => {
    dispatch(loginThunk(value));
  };
  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <div className={s.box_input}>
            <label className={s.label}>Email</label>
            <Field
              name="email"
              type="email"
              placeholder="email"
              className={s.input}
              required
            />
          </div>
          <div className={s.box_input}>
            <label className={s.label}>Password</label>
            <Field
              name="password"
              type="password"
              placeholder="password"
              className={s.input}
              required
            />
          </div>
          <div className={s.box_btn}>
            <button className={s.btn} type="submit">
              Login
            </button>
          </div>
        </Form>
      </Formik>
      <p className={s.link_text}>
        You don`t have an account?{" "}
        <NavLink className={s.link_text} to="/register">
          Register
        </NavLink>
      </p>
    </div>
  );
};
