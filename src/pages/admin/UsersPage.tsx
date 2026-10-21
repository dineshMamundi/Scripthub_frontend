import { useEffect, useState } from "react";

import Loader from "../../components/common/Loader";
import SearchBar from "../../components/common/SearchBar";
import Table from "../../components/common/Table";
import Button from "../../components/common/Button";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("/api/admin/users");
      const data = await response.json();

      setUsers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    console.log("Search:", query);
  };

  const columns = [
    "Name",
    "Email",
    "Role",
    "Actions",
  ];

  const tableData = users.map((user) => ({
    Name: user.name,
    Email: user.email,
    Role: user.role,

    Actions: (
      <div className="flex gap-2">
        <Button variant="primary">
          Edit
        </Button>

        <Button variant="danger">
          Delete
        </Button>
      </div>
    ),
  }));

  if (loading) return <Loader />;

  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-bold">
        Users Management
      </h1>

      <SearchBar
        placeholder="Search users..."
        onSearch={handleSearch}
      />

      <Table
        columns={columns}
        data={tableData}
      />
    </div>
  );
};

export default UsersPage;