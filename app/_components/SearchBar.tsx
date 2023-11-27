"use client";

import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function SearchBar() {
  const [searchVal, setSearchVal] = React.useState("");
  const searchParams = useSearchParams();
  return (
    <div className="flex flex-row gap-4 justify-center items-center mt-4">
      <input
        className="text-black bg-white border-2 border-black rounded-lg w-[600px] h-[40px]"
        type="text"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <Button
        onClick={() => {
          searchParams.set();
        }}
        className={"w-[100px] h-[40px]"}
      >
        Search
      </Button>
    </div>
  );
}
