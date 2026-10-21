import React, { useState } from "react";

const SearchBar = ({
  placeholder = "Search...",
  onSearch,
}) => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchText);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2"
    >
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder={placeholder}
        className="border rounded-md px-4 py-2 w-full"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;