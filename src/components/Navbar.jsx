import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#eee' }} className="mt-2">
      {/*  This is the navigation bar */}
      <NavLink to="/">Home |</NavLink>
      <NavLink to="/subscribe">Subscription</NavLink>
    </nav>
  );
}

export default Navbar;
