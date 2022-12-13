import React from "react";
import { ReactComponent as DevIcon } from "../../assets/dev-icon.svg";
import Button from "../../Components/Button/indesx";

function Navbar() {
  const navigationItems: { item: string }[] = [
    { item: "Home" },
    { item: "Resume" },
    { item: "About" },
    { item: "Contact" },
  ];

  const renderNavItems = () => {
    return (
      <div className="flex gap-4">
        {navigationItems.map((xs, index) => (
          <Button
            buttonText={xs.item}
            dataTestid={`nav-${xs.item}`}
            key={index}
          />
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
