import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Loader from "../../components/common/Loader";
import ScriptForm from "../../components/scripts/ScriptForm";
import { getScriptById, updateScript } from "../../services/scriptService";

interface Script {
  id: string;
  title: string;
  genre: string;
  synopsis: string;
  scriptFile?: File;
}

interface ScriptFormData {
  title: string;
  genre: string;
  synopsis: string;
  scriptFile?: File | null;
}

const EditScriptPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [script, setScript] = useState<Script | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      loadScript();
    }
  }, [id]);

  const loadScript = async (): Promise<void> => {
    try {
      if (!id) return;

      const data: Script = await getScriptById(id);
      setScript(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (
    formData: ScriptFormData
  ): Promise<void> => {
    try {
      if (!id) return;

      const payload = new FormData();

      payload.append("title", formData.title);
      payload.append("genre", formData.genre);
      payload.append("synopsis", formData.synopsis);

      if (formData.scriptFile) {
        payload.append("scriptFile", formData.scriptFile);
      }

      await updateScript(id, payload);

      navigate("/scripts/my");
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <ScriptForm
      isEdit={true}
      initialData={script ?? undefined}
      onSubmit={handleUpdate}
    />
  );
};

export default EditScriptPage;