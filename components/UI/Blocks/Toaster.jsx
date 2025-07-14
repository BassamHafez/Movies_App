import { playFairFont } from "@/logic/static";
import { ToastContainer } from "react-toastify";

const Toaster = () => {
  return (
    <ToastContainer
      position="bottom-left"
      autoClose={3000}
      hideProgressBar={false}
      closeOnClick
      draggable
      pauseOnHover={false}
      pauseOnFocusLoss={false}
      className={`text-sm gap-x-4 ${playFairFont}`}
    />
  );
};

export default Toaster;
