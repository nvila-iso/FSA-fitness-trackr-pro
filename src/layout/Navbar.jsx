import { useAuth } from "../auth/AuthContext";
import { NavLink, Link, Navigate } from "react-router";

/** Navbar with site navigation links */
export default function Navbar() {
  const { token, logout } = useAuth();
  // const { setPage } = usePage();
  return (
    <header>
      <p>Fitness Trackr</p>
      <nav>
        <NavLink to="/">Activities</NavLink>

        {token ? (
          <>
            <Navigate to="/" />
            <Link to="/" reloadDocument>
              Log out
            </Link>
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
