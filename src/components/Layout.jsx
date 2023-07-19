// import PropTypes from "prop-types";

import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { Fragment } from "react";

const Layout = () => {
  return (
    <Fragment>
      <nav className="bg-white py-4 shadow-sm mb-3 fixed top-0 w-full z-10">
        <NavBar />
      </nav>
      <main className="container lg:w-10/12 mx-auto mt-24">
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Layout;

// Greeting.propTypes = {
//   name: PropTypes.string,
// };
