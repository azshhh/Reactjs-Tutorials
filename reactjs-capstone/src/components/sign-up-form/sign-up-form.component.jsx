import { useState } from "react";

const defaultFormFields = {
  name: "",
  email: "",
  pasword: "",
  comfirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, password, confirmPassword } = formFields;

  return (
    <div>
      <h1>Sign-up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label>Name</label>
        <input type="text" required />

        <label>Email</label>
        <input type="email" required />

        <label>Password</label>
        <input type="password" required />

        <label>Confirm Password</label>
        <input type="password" required />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
