import getMovies from "@/lib/getPopularMovies";
import { Suspense } from "react";
import MovieSearchList from "../_components/MovieSearchList";
import SearchBar from "../_components/SearchBar";

export default async function Page() {
  // const [searchValues, setSearchValues] = React.useState("");

  return (
    <>
      <SearchBar />

      <ClientMovieComponent />
    </>
  );
}

const ClientMovieComponent = () => {
  const movieReq = getMovies();

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <MovieSearchList moviePromise={movieReq} />
    </Suspense>
  );
};
