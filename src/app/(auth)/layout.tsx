import Header from "@/component/web/layout/manga/header";
import React from "react";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
<Header/>      <main>{children}</main>
    </div>
  );
}
