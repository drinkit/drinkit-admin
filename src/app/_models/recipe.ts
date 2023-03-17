export class Recipe {

  id!: number
  // cocktailTypeId?: todo
  description!: string
  name!: string
  originalName!: string
  // options?: todo
  ingredientsWithQuantities: Ingredient[] = []
  // val imageUrl: String?, todo
  // val thumbnailUrl: String?, todo
  published!: boolean
  createdDate!: string
  addedBy?: string
}

export class Ingredient {
  ingredientId!: number
  quantity?: number
  unit?: string
}
