import MovieCardId from "@/app/_components/MovieCardId";

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
