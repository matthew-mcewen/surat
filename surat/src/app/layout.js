import "./globals.css";

export const metadata = {
  title: "How to Read & Write in Batak Script",
  description: "You can learn how to read & write anything in the Batak Script (Surat Batak) right here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
