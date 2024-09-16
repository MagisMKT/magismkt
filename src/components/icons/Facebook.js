const Facebook = ({ className }) => {
  return (
    <div className="bg-pink p-2 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        className={className}
      >
        <path
          d="M13.1353 10.1113L13.6292 6.89404H10.542V4.80626C10.542 3.92626 10.9731 3.06793 12.3558 3.06793H13.7592V0.329039C13.7592 0.329039 12.4858 0.111816 11.2681 0.111816C8.72585 0.111816 7.06418 1.65293 7.06418 4.44237V6.89459H4.23807V10.1118H7.06418V17.8896H10.542V10.1118L13.1353 10.1113Z"
          className={className} // Apply the className for fill control
        />
      </svg>
    </div>
  );
};

export default Facebook;
