import Footer from "@/component/web/layout/marketplace/footer";
import Header from "@/component/web/layout/marketplace/header";
import React from "react";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Header/>
        {children}
        <Footer/>
      </main>
    </div>
  );
}
