"use client";
import Image from "next/image";
import { use } from "react";
import { TFood } from "../api/foods/types/FoodType";

export default function FoodList({
  foodPromise,
}: {
  foodPromise: Promise<TFood>;
}) {
  const food = use(foodPromise);
  return (
    <div>
      Food:{" "}
      {food.recipes.map((foods) => (
        <div
          key={foods.id}
          className="grid grid-cols-3 justify-center items-center"
        >
          <h1>{foods.title}</h1>
          <Image src={foods.image} alt={foods.title} height={400} width={400} />
        </div>
      ))}
    </div>
  );
}
