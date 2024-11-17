import React from "react";
import Image from "next/image";

interface ButtonProps {
  title: string;
  icon?: string;
  variant?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  title,
  icon,
  variant = "",
  onClick,
  type = "button",
}) => (
  <button type={type} className={`btn ${variant}`} onClick={onClick}>
    {icon && (
      <span className="inline-block mr-2">
        <Image src={icon} alt={`${title} icon`} width={20} height={20} />
      </span>
    )}
    {title}
  </button>
);

export default Button;
