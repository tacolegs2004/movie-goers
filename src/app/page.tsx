import getMoviesNowPlaying from "@/src/lib/getMoviesNowPlaying";
import getPopularMovies from "@/src/lib/getPopularMovies";
import NowPlayingMovieList from "./_components/NowPlayingMovieList";
import PopularMovieList from "./_components/PopularMovieList";

export default function Home() {
  const popularMovieListReq = getPopularMovies();
  const nowPlayingMovieListReq = getMoviesNowPlaying();

  if (!popularMovieListReq) {
    console.log("failed to fetch");
  }

  return (
    <>
      {/* < UserButton afterSignOutUrl="/" /> */}
      <main>
        <div className="justify-center items-center">
          <div className="ml-4 pb-4 flex flex-col justify-center items-center font-bold text-xl">
            <h1>Now Playing</h1>
          </div>
          <NowPlayingMovieList
            nowPlayingMovieListPromise={nowPlayingMovieListReq}
          />
          <br />
          <div className="ml-4 pb-4 flex flex-col justify-center items-center font-bold text-xl">
            <h1>Popular</h1>
          </div>
          <PopularMovieList popularMoviePromise={popularMovieListReq} />
          <br />
        </div>
      </main>
    </>
  );
}
