import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./Form3.module.css";


const SignupSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.number()
    .min(8, "Error not enough characters")
  .required("Password is required"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  name: Yup.string()
    .min(5, "Text error min")
    .max(8, "Text error max")
    .required("The name is not blank"),
});

function Practive() {
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleChange = (e: any) => {
    console.log(e.target);

  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          name="name"
          placeholder="Email or Phone Number"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={styles.input}
        />
        <p>{formik.touched.name ? formik.errors.name : null}</p>
      </div>
      <div>
        <input
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={handleChange}
          onBlur={formik.handleBlur}
          className={styles.input}
        />
        <p>{formik.touched.password ? formik.errors.password : null}</p>
      </div>
    </form>
  );
}

export default Practive;
