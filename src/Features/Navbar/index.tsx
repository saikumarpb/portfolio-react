import React from "react";
import { ReactComponent as DevIcon } from "../../assets/dev-icon.svg";

function Navbar() {
  const navigationItems: { item: string }[] = [
    { item: "Home" },
    { item: "Resume" },
    { item: "About" },
    { item: "Contact" },
  ];

  const renderNavItems = () => {
    return (
      <div className="flex">
        {navigationItems.map((xs, index) => (
          <button className="text-primary-50 px-4" key={index}>
            {xs.item}
          </button>
        ))}
      </div>
    );
  };
  return (
    <div className="bg-blue-800 h-full flex items-center justify-center m-auto gap-10">
      <div className="gap-4 flex px-4">
        <DevIcon className="!w-6 !h-6" />
        <h4 className="text-primary-50">P B Sai Kumar</h4>
      </div>

      <div>{renderNavItems()}</div>
    </div>
  );
}

export default Navbar;
