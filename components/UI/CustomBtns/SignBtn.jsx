"use client";
import { usePathname, useSelector } from "@/shared/hooks";
import { SecondaryBtn } from "@/shared/components";
import { Link } from "@/shared/lib";

const SignBtn = ({ fullWidth }) => {
  const token = useSelector((s) => s.userInfo.token);
  const pathname = usePathname();
  if (pathname.startsWith("/auth") || token) return null;
  return (
    <>
      <Link href="/auth">
        <SecondaryBtn classes={fullWidth ? "w-full" : ""}>Sign In</SecondaryBtn>
      </Link>
    </>
  );
};

export default SignBtn;
