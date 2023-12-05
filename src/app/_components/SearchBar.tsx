"use client";

import { Button } from "@/src/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);

    console.log(term);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <>
      <form className="flex flex-row gap-4 justify-center items-center mt-4 xs:my-4 sm:mx-8">
        <input
          className="text-black p-2 bg-white border-2 border-black rounded-lg w-[600px] h-[40px]"
          type="text"
          placeholder="Search for a movie"
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("query")?.toString()}
        />
        <Button className="w-[100px] h-[40px]">Search</Button>
      </form>
    </>
  );
}
