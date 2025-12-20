import LayoutProvider from "../components/LayoutProvider";
import "./globals.css";
import "@/stylessheets/commonClasses.css";

export const metadata = {
  title: "BangCars - Local Project",
  description: "car rental application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
