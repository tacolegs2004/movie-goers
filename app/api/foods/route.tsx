import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.NEXT_APP_FOOD_API_KEY}&number=10`,
    {
      cache: "no-cache",
    }
  );

  if (!res.ok) {
    console.log("Fetching failed");
  } else {
    console.log("Fetching was successful!");
  }

  const foods = await res.json();

  return NextResponse.json(foods);
}
