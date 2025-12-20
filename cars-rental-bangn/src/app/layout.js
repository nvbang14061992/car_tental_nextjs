export const metadata = {
  title: "BangCars - Local Project",
  description: "car rental application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
