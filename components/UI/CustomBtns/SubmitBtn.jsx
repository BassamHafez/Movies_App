const SubmitBtn = ({
  classes,
  onClick,
  children,
  myWidth,
  type,
  customColors = false,
}) => {
  const colorClasses = customColors
    ? ""
    : "bg-main text-white hover:bg-white hover:text-main";

  return (
    <button
      type={type ? type : "submit"}
      className={`btn rounded-md  duration-300 ${colorClasses} ${classes} ${
        myWidth ? myWidth : " w-[25em]"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SubmitBtn;
