import { useFormik } from "formik";

export default function FormikFormWithValidate() {
  const emailRule =
    /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Name must not be empty.";
    } else if (values.name.length > 15) {
      errors.name = "Must be 15 characters or less.";
    }

    if (!values.email) {
      errors.email = "Email must not be empty.";
    } else if (!emailRule.test(values.email)) {
      errors.email = "Please enter a valid email.";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },

    validate,

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