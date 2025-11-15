import styles from "./layout.module.css";

export const metadata = {
  title: "Zixes | Login/Register",
  description:
    "Login or register to access your account and enjoy personalized features.",
};

export default function RootLayout({ children }) {
  return (
    <main
      className={`${styles.layout} min-h-[100vh] w-full flex justify-center items-center px-4 md:px-1`}
    >
      <div className={styles.layer}></div>
      <div className="backdrop-blur-lg z-10 mt-15 p-4 rounded-md flex shadow-[0_0_4px_rgba(255,255,255,0.8)] w-[600px] h-8/10 bg-base-100/50">
        <div className="flex flex-col items-center w-full py-4 px-6 overflow-hidden">
          {children}
        </div>
      </div>
    </main>
  );
}
