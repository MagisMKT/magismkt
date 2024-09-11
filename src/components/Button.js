import React, { useState } from "react";

const Button = ({
  text,
  bgColor,
  textColor,
  iconBgColor,
  icon: Icon, // Componente de ícono
  type = "button",
  href,
  rotate = 0,
  iconFillColor = "#190C13", // Color del ícono
  hoverTextColor = "text-main", // Nuevo prop para el color del texto en hover
}) => {
  const [hover, setHover] = useState(false);

  const buttonClasses = `relative overflow-hidden flex items-center justify-between pl-8 gap-8 font-ramillas font-medium italic tracking-tight rounded-full ${bgColor} ${textColor} p-[5px] border border-white border-opacity-20 transition-all duration-300 ease-in-out`;

  const expandingCircleClasses = `absolute right-[5px] top-1/2 transform -translate-y-1/2 transition-all duration-1000 ease-in-out bg-opacity-100 ${iconBgColor} rounded-full ${
    hover ? "w-[calc(100%-10px)] h-[calc(100%-10px)]" : "w-[60px] h-[60px]"
  }`;

  const iconWrapperClasses = `relative z-10 flex items-center justify-center w-[60px] h-[60px]`;

  // Aplicar el color de texto en hover si está en estado de hover
  const textClasses = `relative z-10 text-xl py-4 transition-all duration-500 ${
    hover ? hoverTextColor : textColor
  }`;

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  const iconStyle = {
    transform: `rotate(${rotate}deg)`, // Rotación del ícono
    transition: "transform 0.3s ease-in-out", // Transición suave
  };

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className={textClasses}>{text}</span>
        {/* Círculo expansivo */}
        <div className={expandingCircleClasses}></div>
        {/* Ícono con rotación y color dinámico */}
        <div className={iconWrapperClasses} style={iconStyle}>
          <Icon fillColor={iconFillColor} /> {/* Pasamos el color del ícono */}
        </div>
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={textClasses}>{text}</span>
      {/* Círculo expansivo */}
      <div className={expandingCircleClasses}></div>
      {/* Ícono con rotación y color dinámico */}
      <div className={iconWrapperClasses} style={iconStyle}>
        <Icon fillColor={iconFillColor} /> {/* Pasamos el color del ícono */}
      </div>
    </button>
  );
};

export default Button;
