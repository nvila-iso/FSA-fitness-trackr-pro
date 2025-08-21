import { useAuth } from "../auth/AuthContext";
import { NavLink, Link, useNavigate } from "react-router";

/** Navbar with site navigation links */
export default function Navbar() {
  const { token, logout } = useAuth();
  // const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    nagivate("/");
  };

  return (
    <header>
      <p>Fitness Trackr</p>
      <nav>
        <NavLink to="/">Activities</NavLink>

        {token ? (
          <>
            <NavLink to="/" reloadDocument>
              Log out
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
