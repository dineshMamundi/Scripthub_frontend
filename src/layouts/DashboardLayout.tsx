import { Outlet } from "react-router-dom";

import Sidebar from "../components/common/Sidebar";
import Header from "../components/common/Header";

const DashboardLayout = () => {
  const sidebarItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Scripts",
      path: "/scripts",
    },
    {
      name: "My Scripts",
      path: "/scripts/my",
    },
    {
      name: "Profile",
      path: "/profile",
    },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar items={sidebarItems} />

      <div className="flex-1">
        <Header title="Dashboard" />

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;