import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_APP_API_KEY}`,
    {
      cache: "no-cache",
    }
  );

  if (!res.ok) {
    console.log("Fetching failed");
  } else {
    console.log("Fetching was successful!");
  }

  const movies = await res.json();

  return NextResponse.json(movies);
}
