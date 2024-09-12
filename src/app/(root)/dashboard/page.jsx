import Footer from "@/components/Footer";
import Header from "@/components/Header";
// import DashboardTable from "@/components/Table/DashboardTable";
import TopBar from "@/components/TopBar";
import React from "react";
import "@/styles/style.scss"
import "@/styles/global.css"
import Sidebar from "@/components/Sidebar";
import CardMain from "@/components/Cards/CardMain";

function page() {
  return (
    <div>
      <Header />
      <TopBar />
      <main className="mb-20">
        <div className="container-box flex">
          <Sidebar />
          <CardMain />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default page;
