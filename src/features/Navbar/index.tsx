import React from "react";
import "../Navbar/styles.css";
import { ReactComponent as ArrowLogo } from "../../assets/arrow-logo.svg";

function Navbar() {
  return (
    <div className="bg-blue-800 w-full h-full flex items-center">
      <div className="gap-4 flex px-4 mx-4">
        <ArrowLogo className="arrow-logo" />
        <div className="text-primary-50">P B Sai Kumar</div>
      </div>
    </div>
  );
}

export default Navbar;
