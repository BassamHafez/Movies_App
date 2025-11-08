"use client";
import { useSelector, useSignOut, useState } from "@/shared/hooks";
import { SecondaryBtn } from "@/shared/components";
import { Link } from "@/shared/lib";

const SignBtn = ({ fullWidth }) => {
  const token = useSelector((state) => state.userInfo.token);
  const { logoutModal, openModal } = useSignOut();

  return (
    <>
      {token ? (
        <SecondaryBtn classes={fullWidth ? "w-full" : ""} onClick={openModal}>
          Sign Out
        </SecondaryBtn>
      ) : (
        <Link href="/auth">
          <SecondaryBtn classes={fullWidth ? "w-full" : ""}>
            Sign In
          </SecondaryBtn>
        </Link>
      )}

      {logoutModal}
    </>
  );
};

export default SignBtn;
