// Login Page Validation
export function login_validate(values) {
  const errors = {};

  // Validation for email
  if (!values.email) {
    errors.email = "* Email required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "* Invalid email address";
  }

  // Validation for password
  if (!values.password) {
    errors.password = "* Enter a password";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password =
      "* Password must be atleast 8 and max 20 characters long ";
  } else if (values.password.includes(" ")) {
    errors.password = "* Invalid Password";
  }

  return errors;
}

// Registration Form validation
export default function register_validate(values) {
  const errors = {};

  // Validation for username
  if (!values.username) {
    errors.username = "* Username required";
  } else if (values.username.includes(" ")) {
    errors.username = "Invalid Username";
  }

  // Validation for email
  if (!values.email) {
    errors.email = "* Email required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "* Invalid email address";
  }

  // Validation for password
  if (!values.password) {
    errors.password = "* Enter a password";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password =
      "* Password must be atleast 8 and max 20 characters long ";
  } else if (values.password.includes(" ")) {
    errors.password = "* Invalid Password";
  }

  // Validate Confirm Password

  if (!values.cpassword) {
    errors.cpassword = "* Confirm Password Required";
  } else if (values.password !== values.cpassword) {
    errors.cpassword = "* Password and Confirm-Password don't Match";
  } else if (values.cpassword.includes(" ")) {
    errors.cpassword = "* Invalid Confirm Password";
  }

  return errors;
}
