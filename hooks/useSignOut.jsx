import { userActions } from "@/store/userInfo-slice";
import { useDispatch, useRouter } from "@/shared/hooks";

const useSignOut = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const signOut = () => {
    try {
      localStorage.removeItem("token");
      dispatch(userActions.clearAuth());
      router.push("/auth");
      return "success"
    } catch (error) {
      console.log(error);
      return "faild"
    }
  };

  return signOut;
};

export default useSignOut;
