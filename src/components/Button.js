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
  onClick, // Add the onClick prop
  showTextMobile = true, // Por defecto, los botones mostrarán texto en mobile
  ...props // Spread any other props like onMouseEnter, onMouseLeave, etc.
}) => {
  const [hover, setHover] = useState(false);

  // Condicionalmente asignar 'pl-6' si se muestra el texto en mobile
  const paddingClass = showTextMobile ? "pl-6" : "";

  const buttonClasses = `relative overflow-hidden flex items-center justify-between ${paddingClass} lg:pl-8 gap-6 lg:gap-8 font-ramillas font-medium italic tracking-tight rounded-full ${bgColor} ${textColor} p-[5px] border-[0.5px] dark:border-white border-main !border-opacity-20 transition-all duration-300 ease-in-out`;

  const expandingCircleClasses = `absolute right-[5px] top-1/2 transform -translate-y-1/2 transition-all duration-1000 ease-in-out bg-opacity-100 ${iconBgColor} rounded-full ${
    hover
      ? "w-[calc(100%-10px)] h-[calc(100%-10px)]"
      : "w-[50px] h-[50px] lg:w-[60px] lg:h-[60px]"
  }`;

  const iconWrapperClasses = `relative z-10 flex items-center justify-center w-[50px] h-[50px] lg:w-[60px] lg:h-[60px]`;

  // Aplicar el color de texto en hover si está en estado de hover
  const textClasses = `relative z-10 text-lg !leading-none lg:text-xl text-center py-2 lg:py-4 transition-all duration-500 ${
    hover ? hoverTextColor : textColor
  } ${showTextMobile ? "" : "hidden lg:block"}`; // Controlar la visibilidad según el prop showTextMobile

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
        {...props} // Spread any other props (e.g., onClick for <a>)
      >
        {/* Control de visibilidad del texto según el prop showTextMobile */}
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
      onClick={onClick} // Pass the onClick handler to the button
      {...props} // Spread any other props like onClick for <button>
    >
      {/* Control de visibilidad del texto según el prop showTextMobile */}
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
