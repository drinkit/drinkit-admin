import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Ingredient, IngredientWithQuantity, Recipe} from "../../_models/recipe";
import {RecipesService} from "../../_services/recipes.service";

@Component({
    selector: 'app-recipe-editor',
    templateUrl: './recipe-editor.component.html',
    styleUrls: ['./recipe-editor.component.scss']
})
export class RecipeEditorComponent implements OnInit {

    recipe: Recipe | undefined
    ingredients: Ingredient[] | undefined

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: RecipesService
    ) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.service.listIngredients().subscribe(it =>
                this.ingredients = it.sort((a, b) => a.name.localeCompare(b.name)))
            const id = params['id']
            if (id) {
                this.service.getRecipe(id).subscribe(recipe => this.recipe = recipe)
            } else {
                this.recipe = new Recipe()
            }
        })
    }

    addIngredient() {
        this.recipe?.ingredientsWithQuantities.push(new IngredientWithQuantity())
    }

    removeIngredient(i: number) {
        this.recipe?.ingredientsWithQuantities.splice(i, 1)
    }

    onSubmit() {
        this.service.saveRecipe(this.recipe!).subscribe(it => {
            this.recipe = it;
        })
    }
}
