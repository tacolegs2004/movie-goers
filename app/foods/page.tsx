import FoodList from "../_components/FoodList";
import { TFood } from "../api/foods/types/FoodType";

export default async function Food() {
  const foodReq = fetch("http://localhost:3000/api/foods", {
    cache: "no-cache",
  }).then((res) => res.json()) as Promise<TFood[]>;
  // const food = (await res.json()) as string[];
  return (
    <div>
      <FoodList foodPromise={foodReq} />
    </div>
  );
}
