"use client";
import { use } from "react";

export default function FoodList({
  foodPromise,
}: {
  foodPromise: Promise<string[]>;
}) {
  const food = use(foodPromise);
  return <div>Food: {food.join(", ")}</div>;
}
