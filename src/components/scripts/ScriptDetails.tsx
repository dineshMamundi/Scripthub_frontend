import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Card from "../common/Card";
import Button from "../common/Button";
import Loader from "../common/Loader";

import { getScriptById } from "../../services/scriptService";

const ScriptDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [script, setScript] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchScript();
  }, [id]);

  const fetchScript = async () => {
    try {
      const data = await getScriptById(id);
      setScript(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = () => {
    navigate(`/scripts/edit/${id}`);
  };

  const handleLike = () => {
    console.log("Like Script");
  };

  const handleInterest = () => {
    console.log("Show Interest");
  };

  if (loading) return <Loader />;

  if (!script) {
    return (
      <Card>
        <p>Script not found.</p>
      </Card>
    );
  }

  return (
    <Card className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          {script.title}
        </h1>

        <p className="text-gray-500 mt-2">
          {script.genre}
        </p>
      </div>

      <div>
        <h3 className="font-semibold mb-2">
          Writer
        </h3>

        <p>{script.writer}</p>
      </div>

      <div>
        <h3 className="font-semibold mb-2">
          Synopsis
        </h3>

        <p className="text-gray-700">
          {script.synopsis}
        </p>
      </div>

      <div className="flex gap-6 text-sm">
        <span>👁️ {script.views} Views</span>
        <span>❤️ {script.likes} Likes</span>
        <span>⭐ {script.interests} Interests</span>
      </div>

      <div>
        <h3 className="font-semibold mb-2">
          Status
        </h3>

        <span className="px-3 py-1 rounded-full bg-green-100 text-green-700">
          {script.status}
        </span>
      </div>

      <div>
        <h3 className="font-semibold mb-2">
          Uploaded On
        </h3>

        <p>
          {new Date(
            script.createdAt
          ).toLocaleDateString()}
        </p>
      </div>

      <div className="flex gap-3">
        <Button
          variant="primary"
          onClick={handleEdit}
        >
          Edit
        </Button>

        <Button
          variant="secondary"
          onClick={handleLike}
        >
          Like
        </Button>

        <Button
          variant="success"
          onClick={handleInterest}
        >
          Show Interest
        </Button>

        {script.fileUrl && (
          <Button
            variant="primary"
            onClick={() =>
              window.open(
                script.fileUrl,
                "_blank"
              )
            }
          >
            Download Script
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ScriptDetails;