import FoodList from "../_components/FoodList";

export default async function Food() {
  const foodReq = fetch("http://localhost:3000/api/food", {
    cache: "no-cache",
  }).then((res) => res.json()) as Promise<string[]>;
  // const food = (await res.json()) as string[];
  return (
    <div>
      <FoodList foodPromise={foodReq} />
    </div>
  );
}
