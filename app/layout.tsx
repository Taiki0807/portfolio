import { Footer, Header } from './_components/pages';
import './globals.css';
import style from './layout.module.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        <div className={style.bodycontainer}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
