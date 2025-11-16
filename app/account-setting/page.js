import { Image } from "@/shared/lib";
import AccountSettingForm from "./AccountSettingForm";
import { password } from "@/shared/images";

const page = () => {
  return (
    <main className="p-4">
      <div className="flex gap-2 items-center min-h-[85vh]">
        <div className="flex-1 flex flex-col gap-4">
          <section className="bg-base-200 rounded shadow p-4 ">
            <h1 className="font-bold text-2xl">Change Password</h1>
            <div className="mt-4">
              <AccountSettingForm />
            </div>
          </section>
          <section className="bg-base-200 rounded shadow p-4">
            <h1 className="font-bold text-2xl">Delete Account</h1>
            <p className="my-4 text-gray-400">
              This action is permanent and cannot be undone. Deleting this
              account will result in the loss of all your data and access to the
              platform
            </p>
            <div className="text-end p-2">
              <button className="btn btn-soft bg-red-600 hover:bg-red-500 rounded-md text-white">Delete</button>
            </div>
          </section>
        </div>

        <div className="flex-1 hidden lg:flex justify-center items-center">
          <Image src={password} alt="passowrd key" className="w-92" priority/>
        </div>
      </div>
    </main>
  );
};

export default page;
