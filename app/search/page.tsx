import getMovies from "@/lib/getMovies";
import { Suspense } from "react";
import MovieSearchList from "../_components/MovieSearchList";
import SearchBar from "../_components/SearchBar";

export default async function Page() {
  // const [searchValues, setSearchValues] = React.useState("");

  return (
    <>
      <SearchBar />

      <ClientComponent />
    </>
  );
}

const ClientComponent = () => {
  const movieReq = getMovies();

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <MovieSearchList moviePromise={movieReq} />
    </Suspense>
  );
};
