export class Recipe {

  id!: number
  cocktailTypeId?: number
  description!: string
  name!: string
  originalName!: string
  options: number[] = []
  ingredientsWithQuantities: IngredientWithQuantity[] = []
  imageUrl?: string
  thumbnailUrl?: string
  published!: boolean
  createdDate!: string
  addedBy?: string
}

export class IngredientWithQuantity {
  ingredientId!: number
  quantity?: number
  unit?: string
}

export class Ingredient {
  id!: number
  name!: string
}
