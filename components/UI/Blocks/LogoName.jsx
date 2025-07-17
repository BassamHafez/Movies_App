const LogoName = ({ size }) => {
  return (
    <h1 className={`flex font-extrabold  ${size ? size : "text-3xl"}`}>
      <div className="rotate-20 text-main">Z</div>ixes
    </h1>
  );
};

export default LogoName;
