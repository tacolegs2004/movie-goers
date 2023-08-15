import { z } from "zod";
import { FoodSchema } from "../zod/FoodSchema";

export type TFood = z.infer<typeof FoodSchema>;
