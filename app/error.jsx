"use client";

export default function GlobalError({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold">Something went wrong</h1>
      <p className="text-gray-500 mt-2">{error.message}</p>
      <button onClick={() => reset()} className="btn bg-main/80 hover:bg-main/90 rounded-md  mt-4">
        Try Again
      </button>
    </div>
  );
}
