import "../styles/globals.css";

export const metadata = {
  title: "My login",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
