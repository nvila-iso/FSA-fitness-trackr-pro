import { useState } from "react";
import { useAuth } from "./AuthContext";
import { Navigate, Link } from "react-router";
// import { usePage } from "../layout/PageContext";

/** A form that allows users to log into an existing account. */
export default function Login() {
  const { login } = useAuth();
  // const { setPage } = usePage();

  const [error, setError] = useState(null);

  const tryLogin = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      await login({ username, password });
      <Navigate to="/" />;
      // <Link to="/" reloadDocument></Link>;
      // setPage("activities");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      <h1>Log in to your account</h1>
      <form action={tryLogin}>
        <label>
          Username
          <input type="text" name="username" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <button>Login</button>
        {error && <output>{error}</output>}
      </form>
      <Link to="/register">Need an account? Register here.</Link>
      {/* <a onClick={() => setPage("register")}>Need an account? Register here.</a> */}
    </>
  );
}
