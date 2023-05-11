import { Link, Outlet } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <header>
        <Link to="/">Adopt me!</Link>
      </header>
      <Outlet />
    </>
  );
}
