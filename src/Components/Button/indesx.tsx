import React from "react";
import "./styles.css";

interface ButtonProps {
  buttonText: string | JSX.Element;
  dataTestid: string;
}

function Button({ buttonText, dataTestid }: ButtonProps) {
  return (
    <button
      className={`button-component flex items-center justify-center p-2 border border-blue-800 rounded text-primary-50 transition-all duration-300`}
      type="button"
      data-testid={dataTestid}
    >
      {buttonText}
    </button>
  );
}

export default Button;
