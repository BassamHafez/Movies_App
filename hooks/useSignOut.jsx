import { userActions } from "@/store/userInfo-slice";
import { useDispatch, useRouter, useState } from "@/shared/hooks";
import { MainModal } from "@/shared/components";
import { toast } from "react-toastify";

const useSignOut = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const signOut = () => {
    try {
      localStorage.removeItem("token");
      dispatch(userActions.clearAuth());
      router.push("/auth");
      return "success";
    } catch (error) {
      console.log(error);
      return "faild";
    }
  };

  const logoutHandler = () => {
    const res = signOut();
    if (res === "success") {
      setShowModal(false);
    } else {
      toast.error("something went wrong please try again later!");
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const logoutModal = (
    <MainModal
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      onConfirm={logoutHandler}
      confirmTxt="Sign out"
      dangerAction
    >
      <h3 className="font-bold text-2xl text-red-600 flex items-center gap-2 ">
        Logout Confirmation
      </h3>
      <p className="py-4 text-lg">Are you sure you want to sign out!</p>
    </MainModal>
  );

  return { signOut, logoutModal, openModal };
};

export default useSignOut;
