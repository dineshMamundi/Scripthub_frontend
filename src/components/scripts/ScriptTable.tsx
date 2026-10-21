import Table from "../common/Table";
import Button from "../common/Button";

const ScriptTable = ({
  scripts,
  onView,
  onEdit,
  onDelete,
}) => {
  const columns = [
    "Title",
    "Genre",
    "Status",
    "Date",
    "Action",
  ];

  const tableData = scripts.map((script) => ({
    Title: script.title,
    Genre: script.genre,
    Status: script.status,
    Date: new Date(
      script.createdAt
    ).toLocaleDateString(),

    Action: (
      <div className="flex gap-2">
        <Button
          variant="primary"
          onClick={() => onView(script.id)}
        >
          View
        </Button>

        <Button
          variant="success"
          onClick={() => onEdit(script.id)}
        >
          Edit
        </Button>

        <Button
          variant="danger"
          onClick={() => onDelete(script.id)}
        >
          Delete
        </Button>
      </div>
    ),
  }));

  return (
    <Table
      columns={columns}
      data={tableData}
    />
  );
};

export default ScriptTable;
