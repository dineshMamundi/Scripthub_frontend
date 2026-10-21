import { useNavigate } from "react-router-dom";
import {
  FileText,
  Heart,
  Eye,
} from "lucide-react";

import DashboardCard from "../../components/dashboard/DashboardCard";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";

const ProducerDashboardPage = () => {
  const navigate = useNavigate();

  const stats = {
    scriptsViewed: 150,
    interestedScripts: 25,
    totalAvailableScripts: 500,
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Producer Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard
          title="Scripts Viewed"
          count={stats.scriptsViewed}
          icon={
            <Eye className="text-blue-500" />
          }
        />

        <DashboardCard
          title="Interested Scripts"
          count={stats.interestedScripts}
          icon={
            <Heart className="text-red-500" />
          }
        />

        <DashboardCard
          title="Available Scripts"
          count={stats.totalAvailableScripts}
          icon={
            <FileText className="text-green-500" />
          }
        />
      </div>

      <Card>
        <h2 className="text-xl font-semibold mb-4">
          Quick Actions
        </h2>

        <div className="flex gap-3">
          <Button
            onClick={() =>
              navigate("/producer/scripts")
            }
          >
            Browse Scripts
          </Button>

          <Button
            variant="success"
            onClick={() =>
              navigate("/producer/interested")
            }
          >
            Interested Scripts
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ProducerDashboardPage;