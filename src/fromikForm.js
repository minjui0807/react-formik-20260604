import { useFormik } from "formik";

export default function FormikForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
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
        value={formik.values.name}
      />

      <br />
      <br />

      <label htmlFor="email">Your E-Mail</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="請輸入電子郵件"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <br />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}