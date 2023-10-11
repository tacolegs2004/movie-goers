"use client";

import { useState } from "react";

export default function SearhForm() {
  const [searchVal, setSearchVal] = useState("");

  // setSearchVal(movies)

  return (
    <div>
      <form className="flex flex-row">
        <input
          className="w-full h-8 m-8 text-black p-2 rounded-full"
          type="text"
          name="search"
          id="search"
          placeholder="Search for movies"
          onChange={(e) => {
            e.preventDefault();
            setSearchVal(e.target.value);
          }}
          value={searchVal}
          key={searchVal}
        />
        <button
          type="submit"
          className="bg-blue-500 w-24 h-8 mt-8 mr-4 rounded-md hover:bg-blue-700 duration-200"
          onChange={(e) => {
            e.preventDefault();
            setSearchVal(e.currentTarget.value);
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
}
