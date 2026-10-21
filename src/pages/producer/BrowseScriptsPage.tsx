import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchBar from "../../components/common/SearchBar";
import Loader from "../../components/common/Loader";
import ScriptCard from "../../components/scripts/ScriptCard";

import { getAllScripts } from "../../services/scriptService";

const BrowseScriptsPage = () => {
  const [scripts, setScripts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetchScripts();
  }, []);

  const fetchScripts = async () => {
    try {
      const data = await getAllScripts();
      setScripts(data);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    const filtered = scripts.filter(
      (script) =>
        script.title
          .toLowerCase()
          .includes(query.toLowerCase())
    );

    setScripts(filtered);
  };

  const handleView = (script) => {
    navigate(`/scripts/${script.id}`);
  };

  const handleLike = (script) => {
    console.log("Like:", script.id);
  };

  const handleInterest = (script) => {
    console.log(
      "Interest shown:",
      script.id
    );
  };

  if (loading) return <Loader />;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        Browse Scripts
      </h1>

      <SearchBar
        placeholder="Search scripts..."
        onSearch={handleSearch}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scripts.map((script) => (
          <ScriptCard
            key={script.id}
            script={script}
            onView={handleView}
            onLike={handleLike}
            onShowInterest={
              handleInterest
            }
          />
        ))}
      </div>
    </div>
  );
};

export default BrowseScriptsPage;
