import Footer from "@/component/web/layout/manga/footer";
import Header from "@/component/web/layout/manga/header";
import React from "react";

export default function MangaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
