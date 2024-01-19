"use client";
import { Button } from "@/src/components/ui/button";
import { TMovie } from "@/src/lib/types/MovieTypes";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

type TProps = {
    pathname: string;
    movies: TMovie;
    setMovies: (movies: TMovie) => void;
    result: string;
    setResult: (results: string) => void;
};

export default function SearchBar(props: TProps) {
  const searchParams = useSearchParams();
  const query = searchParams.get(props.result);

  const isValidQuery = query?.match(/^[a-zA-Z0-9 ]+$/) || query === "";
  const { replace } = useRouter();

  function handleSearch(idx: number) {
    const results = props.movies?.results.map(res => {
      if (res.id === idx) {
        return [...res[idx]];
      } else {
        return null;
      }
    })
    console.log(results)
  }

  React.useEffect(() => {
    if (props.pathname) {
      replace(`/search?query=${props.result}`);
    } else {
      replace(`/search`);
    }
    props.setMovies(props.movies);
  }, []);

  if (!isValidQuery) {
    <h1 className="text-3xl font-bold text-center">
      No results found for {props.result}
    </h1>;
  }
  return (
    <>
      <form className="flex flex-row gap-4 justify-center items-center mt-4 xs:my-4 sm:mx-8" onSubmit={handleSearch}>
        <input
          className="text-black p-2 bg-white border-2 border-black rounded-lg w-[600px] h-[40px]"
          type="text"
          placeholder="Search for a movie"
          onChange={(e) => {
            e.preventDefault();
            props.setResult(e.target.value);
          }}
          defaultValue={searchParams.get("query")?.toString()}
          value={props.result}
        />
        <Button className="w-[100px] h-[40px]">Search</Button>
      </form>
      <>
        <ul>
          {props.movies?.results.map((movie) => (
            <li key={movie.title}>{movie.title}</li>
          ))}
        </ul>
      </>
    </>
  );
}
