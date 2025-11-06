"use client";
import { useRouter } from "@/shared/hooks";
import { Folder } from "@/shared/icons";

const DetailsBreadCrampLinks = ({ type }) => {
  const router = useRouter();

  return (
    <div className="breadcrumbs text-sm flex justify-end m-3">
      <ul>
        <li className="capitalize">
          <button
            className="inline-flex items-center gap-2"
            onClick={() => router.back()}
          >
            <Folder className="size-4" />
            {type}
          </button>
        </li>
        <li className="pointer-events-none">
          <span className="inline-flex items-center gap-2">
            <Folder className="size-4" />
            Details
          </span>
        </li>
      </ul>
    </div>
  );
};

export default DetailsBreadCrampLinks;
