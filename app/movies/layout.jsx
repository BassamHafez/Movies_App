import { Footer, MainSideBar } from "@/shared/components";

export const metadata = {
  title: "Zixes Movies| Movies",
  description: "Watch movies online for free, let's enjoy the movies together!",
};

const RootLayout = ({ children }) => {
  return (
    <>
      <main className="h-[90vh] overflow-y-hidden mb-16">
        <div className="flex gap-2 py-8">
          <aside className="max-w-[300px] px-4">
            <MainSideBar />
          </aside>
          <section className="col-span-10 h-[90vh] overflow-y-auto flex-grow px-4">
            {children}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
