import { useFormik } from "formik";
import * as Yup from "yup";

const FormikFormWithYUP = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less.")
        .required("Name must not be empty."),

      email: Yup.string()
        .email("Please enter a valid email.")
        .required("Email must not be empty."),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Your Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="請輸入姓名"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />

      {formik.touched.name && formik.errors.name ? (
        <div style={{ color: "red" }}>{formik.errors.name}</div>
      ) : null}

      <br />
      <br />

      <label htmlFor="email">Your E-Mail</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="請輸入電子郵件"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />

      {formik.touched.email && formik.errors.email ? (
        <div style={{ color: "red" }}>{formik.errors.email}</div>
      ) : null}

      <br />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormikFormWithYUP;