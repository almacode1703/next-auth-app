export default function login_validate(values) {
  const errors = {};

  // Validation for email
  if (!values.email) {
    errors.email = "* Email required";
  } 
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if(!values.password){
    errors.password = "Enter a password"
  }   
  else if(values.password.length < 8 || values.password.length > 20){
    errors.password = "Password must be atleast 8 and max 20 characters long "
  }

  else if(values.password.includes(" ")){
    errors.password = "invalid Password"
  }

  return errors
}
