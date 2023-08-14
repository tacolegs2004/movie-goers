const Page = ({ params }: { params: { movieId: string } }) => {
  return <div>ID: {params.movieId}</div>;
};

export default Page;
