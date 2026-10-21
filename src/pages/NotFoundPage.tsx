import { useNavigate } from "react-router-dom";

import Card from "../components/common/Card";
import Button from "../components/common/Button";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <Card className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-red-500">
          404
        </h1>

        <h2 className="text-2xl font-semibold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-3">
          The page you're looking for
          doesn't exist.
        </p>

        <Button
          className="mt-5"
          onClick={() => navigate("/")}
        >
          Go Home
        </Button>
      </Card>
    </div>
  );
};

export default NotFoundPage;