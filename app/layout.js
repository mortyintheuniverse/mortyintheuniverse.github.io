
import "./globals.css";



export const metadata = {
  title: "Save the pangolier",
  description: "＜（＾－＾）＞",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  suppressHydrationWarning={true}>
      <head > <link rel="icon" href="https://www.dota2.com/favicon.ico" />
      <body>{children}</body></head>
    </html>
  );
}
