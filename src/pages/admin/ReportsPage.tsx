import DashboardCard from "../../components/dashboard/DashboardCard";

import {
  Users,
  FileText,
  AlertTriangle,
} from "lucide-react";

const ReportsPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Reports
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard
          title="Total Users"
          count={120}
          icon={
            <Users className="text-blue-500" />
          }
        />

        <DashboardCard
          title="Total Scripts"
          count={540}
          icon={
            <FileText className="text-green-500" />
          }
        />

        <DashboardCard
          title="Reported Scripts"
          count={12}
          icon={
            <AlertTriangle className="text-red-500" />
          }
        />
      </div>
    </div>
  );
};

export default ReportsPage;