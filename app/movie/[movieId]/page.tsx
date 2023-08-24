export default function Page({ params }: { params: { movieId: string } }) {
  return <div>ID: {params.movieId}</div>;
}
