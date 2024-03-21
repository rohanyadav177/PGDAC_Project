import React from "react";
import Navbar from "./Navbar";

export default function NavbarHeader({children}) {
  return (
    <div><Navbar></Navbar>
    <div>{children}</div>
    </div>
  )
}
