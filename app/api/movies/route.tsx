import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
    );
    if (!res.ok) {
      console.log("Failed to fetch data in getMovies");
    } else {
      console.log("Fetch was successful!");
    }

    return NextResponse.json(res);
  } catch (err: unknown) {
    console.error("error", err);
    return []; // Return an empty array in case of an error or failed fetch
  }
}
