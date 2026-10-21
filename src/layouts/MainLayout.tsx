import { Outlet } from "react-router-dom";

import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header
        title="Script Connect"
      />

      <Navbar />

      <main className="flex-grow container mx-auto p-6">
        <Outlet />
      </main>

      <Footer
        companyName="Script Connect"
        year={new Date().getFullYear()}
      />
    </div>
  );
};

export default MainLayout;