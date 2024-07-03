import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import { Field, Formik, Form } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import s from "./RegisterForm.module.css";

const RegistrationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (value) => {
    dispatch(registerThunk(value));
  };
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  return (
    <div className={s.wrapper}>
      <Formik
        validationSchema={RegistrationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <div className={s.box_input}>
            <label className={s.label}>Name</label>
            <Field
              name="name"
              placeholder="name"
              className={s.input}
              required
            />
          </div>
          <div>
            <label className={s.label}>Email</label>
            <Field
              name="email"
              type="email"
              placeholder="email"
              className={s.input}
              required
            />
          </div>
          <div>
            <label className={s.label}>Password</label>
            <Field
              name="password"
              type="password"
              placeholder="password"
              className={s.input}
              required
            />
          </div>
          <div>
            <button className={s.btn} type="submit">
              Register
            </button>
          </div>
        </Form>
      </Formik>
      <p className={s.link_text}>
        You already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};
