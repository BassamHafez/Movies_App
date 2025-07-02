import { Navbar } from "@/shared/components";
import { ReduxProvider } from "@/shared/providers";
import "./globals.css";
import { Roboto } from 'next/font/google'


const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400','500','600', '700'], 
  display: 'swap',
})

export const metadata = {
  title: "Zixes Movies",
  description: "Watch movies online for free, let's enjoy the movies together!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <ReduxProvider>
          <Navbar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
