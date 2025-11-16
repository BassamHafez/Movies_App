import { notFound } from "@/shared/images";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="h-[90vh]">
      <section className="flex flex-col items-center justify-center text-center h-[90%]">
        <Image src={notFound} alt="not Found 404" className="w-82" />
        <p className="text-gray-400">
          We couldn't locate the page you're looking for. This might be due to a
          broken link
        </p>
        <p className="text-gray-400">Outdated bookmark, or a mistyped URL.</p>
        <div className="flex justify-center items-center">
          <Link href="/" className="btn bg-main/80 hover:bg-main/90 rounded-md mt-6">
            Start Over
          </Link>
        </div>
      </section>
    </main>
  );
}
