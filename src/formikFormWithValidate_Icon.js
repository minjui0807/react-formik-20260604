import { useFormik } from "formik";

// 匯入 React Icons
import {
  FaUser,
  FaEnvelope,
  FaExclamationCircle,
  FaPaperPlane,
} from "react-icons/fa";

export default function FormikFormWithValidateIcon() {
  // 加上 i 表示不分大小寫
  const emailRule = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,4}$/i;

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

  const showNameError = formik.touched.name && formik.errors.name;
  const showEmailError = formik.touched.email && formik.errors.email;

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">
          <FaUser className="label-icon" />
          Your Name
        </label>

        <input
          type="text"
          id="name"
          name="name"
          placeholder="請輸入姓名"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className={showNameError ? "invalid" : ""}
        />

        {showNameError ? (
          <div className="error-message">
            <FaExclamationCircle />
            {formik.errors.name}
          </div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="email">
          <FaEnvelope className="label-icon" />
          Your E-Mail
        </label>

        <input
          type="email"
          id="email"
          name="email"
          placeholder="請輸入電子郵件"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className={showEmailError ? "invalid" : ""}
        />

        {showEmailError ? (
          <div className="error-message">
            <FaExclamationCircle />
            {formik.errors.email}
          </div>
        ) : null}
      </div>

      <button type="submit">
        <FaPaperPlane />
        Submit
      </button>
    </form>
  );
}