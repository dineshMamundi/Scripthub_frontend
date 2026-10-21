import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Loader from "../../components/common/Loader";
import ScriptTable from "../../components/scripts/ScriptTable";
import { deleteScript, getMyScripts } from "../../services/scriptService";

const MyScriptsPage = () => {
  const [scripts, setScripts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetchMyScripts();
  }, []);

  const fetchMyScripts = async () => {
    try {
      const data = await getMyScripts();
      setScripts(data);
    } finally {
      setLoading(false);
    }
  };

  const handleView = (id:number) => {
    navigate(`/scripts/${id}`);
  };

  const handleEdit = (id:number) => {
    navigate(`/scripts/edit/${id}`);
  };

  const handleDelete = async (id:number) => {
    try {
      await deleteScript(id);

      setScripts((prev) =>
        prev.filter((script:any) => script.id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <Loader />;

  return (
    <ScriptTable
      scripts={scripts}
      onView={handleView}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};

export default MyScriptsPage;