"use client";

import { Button } from "@/components/ui/button";
import React from "react";

// Translation

// hola, soy un comentario. Hoy... no tengo ganas de trabajar. Me voy a ir a la playa.
// Pero antes, voy a hacer un cambio en el código.
// Y ahora, me voy a la playa.
// Adiós.

export default function SearchBar() {
  const [searchVal, setSearchVal] = React.useState("");
  // const searchParams = useSearchParams();

  return (
    <>
      <form className="flex flex-row gap-4 justify-center items-center mt-4 xs:my-4 sm:mx-8">
        <input
          className="text-black p-2 bg-white border-2 border-black rounded-lg w-[600px] h-[40px]"
          type="text"
          placeholder="Search for a movie..."
          value={searchVal}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            e.preventDefault();
            setSearchVal(e.target.value);
          }}
        />
        <Button className="w-[100px] h-[40px]">Search</Button>
      </form>
    </>
  );
}
