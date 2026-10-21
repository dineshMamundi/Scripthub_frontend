import { useEffect, useState } from "react";
import {
  FileText,
  Eye,
  Heart,
  Users,
} from "lucide-react";

import DashboardCard from "./DashboardCard";
import Loader from "../common/Loader";

const DashboardStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    try {
      const response = await fetch(
        "/dashboard/stats"
      );

      const data = await response.json();

      setStats(data);
    } catch (error) {
      console.error(
        "Failed to load dashboard stats",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <DashboardCard
        title="Total Scripts"
        count={stats?.totalScripts || 0}
        icon={<FileText className="text-blue-500" />}
      />

      <DashboardCard
        title="Total Views"
        count={stats?.totalViews || 0}
        icon={<Eye className="text-green-500" />}
      />

      <DashboardCard
        title="Producer Interests"
        count={stats?.producerInterests || 0}
        icon={<Heart className="text-red-500" />}
      />

      <DashboardCard
        title="Total Producers"
        count={stats?.totalProducers || 0}
        icon={<Users className="text-purple-500" />}
      />
    </div>
  );
};

export default DashboardStats;