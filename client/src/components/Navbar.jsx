import React, {Fragment} from "react"

import {NavLing} from "react-router-dom"

const Navbar = ({ session }) => (
    <nav>
      {session && session.getCurrentUser ? (
        <NavbarAuth session={session} />
      ) : (
        <NavbarUnAuth />
      )}
    </nav>
  );


  export default Navbar;
