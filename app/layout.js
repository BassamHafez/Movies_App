import { Navbar, Toaster } from "@/shared/components";
import { QueryWrapper, ReduxProvider } from "@/shared/providers";
import { interFont } from "@/logic/static";
import "./globals.css";

export const metadata = {
  title: "Zixes Movies",
  description: "Watch movies online for free, let's enjoy the movies together!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={interFont}>
      <body>
        <Toaster />
        <ReduxProvider>
          <QueryWrapper>
            <Navbar />
            {children}
          </QueryWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
