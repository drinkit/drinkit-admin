export class Recipe {

  id!: number
  // cocktailTypeId?: todo
  description!: string
  name!: string
  originalName!: string
  // options?: todo
  ingredientsWithQuantities: Ingredient[] = []
  imageUrl?: string
  thumbnailUrl?: string
  published!: boolean
  createdDate!: string
  addedBy?: string
}

export class Ingredient {
  ingredientId!: number
  quantity?: number
  unit?: string
}
