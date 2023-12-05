import getSearchedMovies from "@/src/lib/getSearchedMovies";
import MovieSearchList from "../_components/MovieSearchList";
import SearchBar from "../_components/SearchBar";

export default async function Page() {
  const searchParams = new URLSearchParams();
  const query = searchParams.get("query") || ("" as string | undefined);
  //    ^?

  const test = query.match(/^[a-zA-Z0-9 ]+$/) || query === "";

  const searchMovieReq = getSearchedMovies({ query });

  if (!test) {
    return (
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-center">
          Please enter a valid search query
        </h1>
      </div>
    );
  }

  return (
    <>
      <SearchBar />

      <MovieSearchList query={query} moviePromise={searchMovieReq} />
    </>
  );
}

// const ClientMovieComponent = () => {

// };
