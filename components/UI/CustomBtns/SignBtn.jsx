"use client";
import { useSelector, useSignOut, useState } from "@/shared/hooks";
import { MainModal, SecondaryBtn } from "@/shared/components";
import { Link } from "@/shared/lib";

const SignBtn = ({ fullWidth }) => {
  const [showModal, setShowModal] = useState(false);

  const token = useSelector((state) => state.userInfo.token);
  const signOut = useSignOut();
  return (
    <>
      {token ? (
        <SecondaryBtn
          classes={fullWidth ? "w-full" : ""}
          onClick={() => setShowModal(true)}
        >
          Sign Out
        </SecondaryBtn>
      ) : (
        <Link href="/auth">
          <SecondaryBtn classes={fullWidth ? "w-full" : ""}>
            Sign In
          </SecondaryBtn>
        </Link>
      )}

      <MainModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={() => {
          signOut();
          setShowModal(false);
        }}
        confirmTxt="Sign out"
      >
        <h3 className="font-bold text-2xl text-main flex items-center gap-2 ">
          Logout Confirmation
        </h3>
        <p className="py-4 text-lg">Are you sure you want to sign out!</p>
      </MainModal>
    </>
  );
};

export default SignBtn;
