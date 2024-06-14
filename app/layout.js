
import "./globals.css";



export const metadata = {
  title: "Save the pangolier",
  description: "＜（＾－＾）＞",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  suppressHydrationWarning={true}>
      <head>
      <body>{children}</body></head>
    </html>
  );
}
