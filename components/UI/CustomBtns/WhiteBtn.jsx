"use client";

const WhiteBtn = ({ classes = "", type = "button", onClick, children }) => (
  <button
    type={type}
    onClick={onClick}
    className={`btn
      relative inline-flex items-center justify-center overflow-hidden 
      rounded-lg font-semibold min-w-24 border border-transparent bg-white text-main hover:bg-transparent hover:border-main transition-all duration-300
      ${classes}
    `}
  >
    {children}
  </button>
);

export default WhiteBtn;
