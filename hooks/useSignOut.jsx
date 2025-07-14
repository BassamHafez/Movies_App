import { userActions } from "@/store/userInfo-slice";
import { useDispatch, useRouter } from "@/shared/hooks";

const useSignOut = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const signOut = () => {
    localStorage.removeItem("token");
    dispatch(userActions.clearAuth());
    router.push("/auth");
  };

  return signOut;
};

export default useSignOut;
