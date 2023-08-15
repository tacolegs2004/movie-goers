import { z } from "zod";

export const FoodSchema = z.object({
  recipes: z.array(
    z.object({
      vegetarian: z.boolean(),
      vegan: z.boolean(),
      glutenFree: z.boolean(),
      dairyFree: z.boolean(),
      veryHealthy: z.boolean(),
      cheap: z.boolean(),
      veryPopular: z.boolean(),
      sustainable: z.boolean(),
      lowFodmap: z.boolean(),
      weightWatcherSmartPoints: z.number(),
      gaps: z.string(),
      preparationMinutes: z.number(),
      cookingMinutes: z.number(),
      aggregateLikes: z.number(),
      healthScore: z.number(),
      creditsText: z.string(),
      license: z.string(),
      sourceName: z.string(),
      pricePerServing: z.number(),
      extendedIngredients: z.array(
        z.union([
          z.object({
            id: z.number(),
            aisle: z.string(),
            image: z.string(),
            consistency: z.string(),
            name: z.string(),
            nameClean: z.string(),
            original: z.string(),
            originalName: z.string(),
            amount: z.number(),
            unit: z.string(),
            meta: z.array(z.unknown()),
            measures: z.object({
              us: z.object({
                amount: z.number(),
                unitShort: z.string(),
                unitLong: z.string(),
              }),
              metric: z.object({
                amount: z.number(),
                unitShort: z.string(),
                unitLong: z.string(),
              }),
            }),
          }),
          z.object({
            id: z.number(),
            aisle: z.string(),
            image: z.string(),
            consistency: z.string(),
            name: z.string(),
            nameClean: z.string(),
            original: z.string(),
            originalName: z.string(),
            amount: z.number(),
            unit: z.string(),
            meta: z.array(z.string()),
            measures: z.object({
              us: z.object({
                amount: z.number(),
                unitShort: z.string(),
                unitLong: z.string(),
              }),
              metric: z.object({
                amount: z.number(),
                unitShort: z.string(),
                unitLong: z.string(),
              }),
            }),
          }),
        ])
      ),
      id: z.number(),
      title: z.string(),
      readyInMinutes: z.number(),
      servings: z.number(),
      sourceUrl: z.string(),
      image: z.string(),
      imageType: z.string(),
      summary: z.string(),
      cuisines: z.array(z.unknown()),
      dishTypes: z.array(z.string()),
      diets: z.array(z.string()),
      occasions: z.array(z.unknown()),
      instructions: z.string(),
      analyzedInstructions: z.array(
        z.object({
          name: z.string(),
          steps: z.array(
            z.union([
              z.object({
                number: z.number(),
                step: z.string(),
                ingredients: z.array(
                  z.object({
                    id: z.number(),
                    name: z.string(),
                    localizedName: z.string(),
                    image: z.string(),
                  })
                ),
                equipment: z.array(z.unknown()),
              }),
              z.object({
                number: z.number(),
                step: z.string(),
                ingredients: z.array(
                  z.object({
                    id: z.number(),
                    name: z.string(),
                    localizedName: z.string(),
                    image: z.string(),
                  })
                ),
                equipment: z.array(
                  z.object({
                    id: z.number(),
                    name: z.string(),
                    localizedName: z.string(),
                    image: z.string(),
                  })
                ),
              }),
            ])
          ),
        })
      ),
      originalId: z.null(),
      spoonacularSourceUrl: z.string(),
    })
  ),
});
