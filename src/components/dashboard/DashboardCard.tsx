import React from "react";
import Card from "../common/Card";

interface DashboardCardProps {
  title: string;
  count: number | string;
  icon: React.ReactNode;
}

const DashboardCard = ({
  title,
  count,
  icon,
}: DashboardCardProps) => {
  return (
    <Card className="hover:shadow-lg transition">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-gray-500 text-sm">
            {title}
          </h3>

          <h2 className="text-3xl font-bold mt-2">
            {count}
          </h2>
        </div>

        <div className="text-4xl">
          {icon}
        </div>
      </div>
    </Card>
  );
};

export default DashboardCard;