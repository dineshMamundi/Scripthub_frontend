import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Loader from "../../components/common/Loader";
import ScriptCard from "../../components/scripts/ScriptCard";

const InterestedScriptsPage = () => {
  const [scripts, setScripts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetchInterestedScripts();
  }, []);

  const fetchInterestedScripts =
    async () => {
      try {
        const response = await fetch(
          "/api/producer/interested-scripts"
        );

        const data =
          await response.json();

        setScripts(data);
      } finally {
        setLoading(false);
      }
    };

  const handleView = (script) => {
    navigate(`/scripts/${script.id}`);
  };

  if (loading) return <Loader />;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Interested Scripts
      </h1>

      {scripts.length === 0 ? (
        <p>
          No interested scripts found.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scripts.map((script) => (
            <ScriptCard
              key={script.id}
              script={script}
              onView={handleView}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default InterestedScriptsPage;