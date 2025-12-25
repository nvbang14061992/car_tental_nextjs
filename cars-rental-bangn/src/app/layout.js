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
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.7.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
