import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Loader from "../../components/common/Loader";
import ScriptCard from "../../components/scripts/ScriptCard";
import { getAllScripts } from "../../services/scriptService";

interface Script {
  id: string;
  title: string;
  synopsis: string;
  genre: string;
  author: string;
}

const AllScriptsPage = () => {
  const [scripts, setScripts] = useState<Script[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  // useEffect(() => {
  //   fetchScripts();
  // }, []);

  // const fetchScripts = async (): Promise<void> => {
  //   try {
  //     const data: Script[] = await getAllScripts();
  //     setScripts(data);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleView = (script: Script): void => {
    navigate(`/scripts/${script.id}`);
  };

  const handleLike = (script: Script): void => {
    console.log("Like", script.id);
  };

  const handleInterest = (script: Script): void => {
    console.log("Interest", script.id);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <h4>All Scripts</h4>
      {scripts.map((script) => (
        <ScriptCard
          key={script.id}
          script={script}
          onView={handleView}
          onLike={handleLike}
          onShowInterest={handleInterest}
        />
      ))}
    </div>
  );
};

export default AllScriptsPage;