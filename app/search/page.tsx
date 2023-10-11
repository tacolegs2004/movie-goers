import getMovies from "@/lib/getMovies";
import { Suspense } from "react";
import MovieSearchList from "../_components/MovieSearchList";

export default function Page() {
  const movieReq = getMovies();

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const handleRegistration = (data) => data;

  if (!movieReq) {
    console.log("failed to fetch");
  }

  return (
    <>
      {/* <SearhForm /> */}
      <div>
        <form className="flex flex-row">
          <input
            className="w-full h-8 m-8 text-black p-2 rounded-full"
            type="text"
            name="search"
            id="search"
            placeholder="Search for movies"
            // onChange={(e) => {
            //   e.preventDefault();
            //   setSearchVal(e.target.value);
            // }}
            // value={searchVal}
            // key={searchVal?.id}
            // {...register()}
          />
          <button
            type="submit"
            className="bg-blue-500 w-24 h-8 mt-8 mr-4 rounded-md hover:bg-blue-700 duration-200"
          >
            Search
          </button>
        </form>
      </div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <MovieSearchList moviePromise={movieReq} />
      </Suspense>
    </>
  );
}
