import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import { Field, Formik, Form } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

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
    <div>
      <Formik
        validationSchema={RegistrationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label>
              <span>Name</span>
            </label>
            <Field name="name" placeholder="name" required />
          </div>
          <div>
            <label>
              <span>Email</span>
            </label>
            <Field name="email" type="email" placeholder="email" required />
          </div>
          <div>
            <label>
              <span>Password</span>
            </label>
            <Field
              name="password"
              type="password"
              placeholder="password"
              required
            />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </Form>
      </Formik>
      <p>
        You already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};
