import { useNavigate } from "react-router-dom";
import ScriptForm from "../../components/scripts/ScriptForm";
import { createScript } from "../../services/scriptService";

const AddScriptPage = () => {
  const navigate = useNavigate();

  const handleCreate = async (formData:any) => {
    try {
      const payload = new FormData();

      payload.append("title", formData.title);
      payload.append("genre", formData.genre);
      payload.append("synopsis", formData.synopsis);

      if (formData.scriptFile) {
        payload.append("scriptFile", formData.scriptFile);
      }

      await createScript(payload);

      navigate("/scripts/my");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScriptForm
      isEdit={false}
      onSubmit={handleCreate}
    />
  );
};

export default AddScriptPage;