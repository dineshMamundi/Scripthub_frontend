import { useEffect, useState } from "react";

import Loader from "../../components/common/Loader";
import Table from "../../components/common/Table";
import Button from "../../components/common/Button";

const ScriptsPage = () => {
  const [scripts, setScripts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchScripts();
  }, []);

  const fetchScripts = async () => {
    try {
      const response = await fetch(
        "/api/admin/scripts"
      );

      const data = await response.json();

      setScripts(data);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    "Title",
    "Genre",
    "Writer",
    "Status",
    "Actions",
  ];

  const tableData = scripts.map(
    (script) => ({
      Title: script.title,
      Genre: script.genre,
      Writer: script.writer,
      Status: script.status,

      Actions: (
        <div className="flex gap-2">
          <Button variant="success">
            Approve
          </Button>

          <Button variant="danger">
            Reject
          </Button>
        </div>
      ),
    })
  );

  if (loading) return <Loader />;

  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-bold">
        Scripts Management
      </h1>

      <Table
        columns={columns}
        data={tableData}
      />
    </div>
  );
};

export default ScriptsPage;