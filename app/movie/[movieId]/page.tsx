import MovieCardId from "@/app/_components/MovieListId";

export default async function Page({
  params,
}: {
  params: {
    movieId: string;
  };
}) {
  return (
    <>
      <MovieCardId params={params} />
    </>
  );
}
