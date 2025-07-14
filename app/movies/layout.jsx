import { MainSideBar } from "@/shared/components";

export const metadata = {
  title: "Zixes Movies| Movies",
  description: "Watch movies online for free, let's enjoy the movies together!",
};

const RootLayout = ({ children }) => {
  return (
    <main className="grid grid-cols-12 gap-2 py-8 px-4">
      <aside className="col-span-2">
        <MainSideBar />
      </aside>
      <section className="col-span-10">{children}</section>
    </main>
  );
};

export default RootLayout;
