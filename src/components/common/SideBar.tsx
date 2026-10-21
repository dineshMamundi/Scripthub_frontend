import { Link } from "react-router-dom";
const Sidebar = ({ items }) => {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <ul>
        {items.map((item) => (
          <li key={item.name} className="mb-3">
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
