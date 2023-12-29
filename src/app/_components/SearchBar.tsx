"use client";
import { Button } from "@/src/components/ui/button";
import { TMovie } from "@/src/lib/types/MovieTypes";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchBar({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [result, setResult] = useState("");
  const [movies, setMovies] = useState<TMovie>();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const query = searchParams.get(result);

  const isValidQuery = query?.match(/^[a-zA-Z0-9 ]+$/) || query === "";
  const { replace } = useRouter();

  useEffect(() => {
    if (pathname === "/search") {
      replace(`/search?query=${result}`);
    } else {
      replace(`/search`);
    }
    setMovies(movies);
  }, [pathname, replace, result]);
  return (
    <>
      <form className="flex flex-row gap-4 justify-center items-center mt-4 xs:my-4 sm:mx-8">
        <input
          className="text-black p-2 bg-white border-2 border-black rounded-lg w-[600px] h-[40px]"
          type="text"
          placeholder="Search for a movie"
          onChange={(e) => {
            e.preventDefault();
            setResult(e.target.value);
          }}
          defaultValue={searchParams.get("query")?.toString()}
          value={result}
        />
        <Button className="w-[100px] h-[40px]">Search</Button>
      </form>

      {!isValidQuery ? (
        <h1 className="text-3xl font-bold text-center">
          No results found for {result}
        </h1>
      ) : (
        <>
          <ul>
            {movies?.results.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </>
      )}
      {children}
    </>
  );
}
