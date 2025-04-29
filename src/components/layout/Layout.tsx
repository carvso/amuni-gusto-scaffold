
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "sonner";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <Toaster position="top-center" richColors />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
