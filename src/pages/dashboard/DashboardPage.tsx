import { useNavigate } from "react-router-dom";

import DashboardStats from "../../components/dashboard/DashboardStats";

import Button from "../../components/common/Button";
import Card from "../../components/common/Card";

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <Button
          onClick={() =>
            navigate("/scripts/add")
          }
        >
          Add Script
        </Button>
      </div>

      {/* Stats */}

      <DashboardStats />

      {/* Quick Actions */}

      <Card>
        <h2 className="text-xl font-semibold mb-4">
          Quick Actions
        </h2>

        <div className="flex gap-3">
          <Button
            onClick={() =>
              navigate("/scripts")
            }
          >
            Browse Scripts
          </Button>

          <Button
            variant="success"
            onClick={() =>
              navigate("/scripts/my")
            }
          >
            My Scripts
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default DashboardPage;