
const loading = () => {
  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-center items-center gap-2 z-50">
      <span className="loading loading-bars loading-xl" />
      <span className="loading loading-bars loading-xl" />
    </div>
  );
};

export default loading;
