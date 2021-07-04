import React from "react";

export default function SearchBar(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => props.setSearchValue(e.target.value)}
      />
    </div>
  );
}
