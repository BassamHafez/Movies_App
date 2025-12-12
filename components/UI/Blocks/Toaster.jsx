import { playFairFont } from "@/logic/static";
import { ToastContainer, Zoom } from "react-toastify";

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
      theme="dark"
      className={`text-sm gap-x-4 ${playFairFont}`}
      transition={Zoom}
    />
  );
};

export default Toaster;
