import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./Form3.module.css";

type Props = {
  text2?: string;
  text4?: string;
  icon2?: string;
  text5?: string;
  text6?: string;
  text9?: string;
};
const SignupSchema = Yup.object({
  email: Yup.string().min(8, "Invalid email").required("Required"),
  password: Yup.number()
    .min(8, "Error not enough characters")
    .required("Password is required"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

function Form3Formik(props: Props) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue(e.target.name, e.target.value);
    console.log(e.target);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <div className={styles.text1}>{props.text2}</div>
        <input
          name="email"
          placeholder="Email or Phone Number"
          value={formik.values.email}
          onChange={handleChange}
          onBlur={formik.handleBlur}
        />
        <p>{formik.touched.email ? formik.errors.email : null}</p>
      </div>
      <div>
        <div className={styles.text1}>{props.text4}</div>
        <input
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={handleChange}
          onBlur={formik.handleBlur}
        />
        <p>{formik.touched.password ? formik.errors.password : null}</p>
      </div>
      <div className={styles.list}>
        <p className={`${styles.icon2} ${props.icon2}`}></p>
        <div className={styles.text2}>{props.text5}</div>
        <div className={styles.text3}>{props.text6}</div>
      </div>
      <button className={styles.name3} type="submit">
        {props.text9}
      </button>
    </form>
  );
}

export default Form3Formik;
