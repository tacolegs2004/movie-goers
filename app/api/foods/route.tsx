import { NextResponse } from "next/server";

const FOODS = ["hot dogs", "hamburgers", "tacos", "french fries"];

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return NextResponse.json(FOODS);
}
