const Chevron = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="9"
      viewBox="0 0 14 9"
      fill="none"
      onClick={onClick} // Asegurarnos de que el clic funcione correctamente
      className="cursor-pointer"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.46967 0.96967C0.762563 0.676777 1.23744 0.676777 1.53033 0.96967L7 6.43934L12.4697 0.96967C12.7626 0.676777 13.2374 0.676777 13.5303 0.96967C13.8232 1.26256 13.8232 1.73744 13.5303 2.03033L7.53033 8.03033C7.23744 8.32322 6.76256 8.32322 6.46967 8.03033L0.46967 2.03033C0.176777 1.73744 0.176777 1.26256 0.46967 0.96967Z"
        fill="#BAE846"
        fillOpacity="0.5"
      />
    </svg>
  );
};

export default Chevron;
