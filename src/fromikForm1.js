import { useFormik } from "formik";

export default function FormikForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },

    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = "姓名不可以空白";
      }

      if (!values.email) {
        errors.email = "電子郵件不可以空白";
      }

      return errors;
    },

    onSubmit: (values) => {
      console.log(values);
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
}