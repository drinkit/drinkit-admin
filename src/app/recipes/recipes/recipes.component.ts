import {Component, OnInit} from '@angular/core';
import {RecipesService} from "../../_services/recipes.service";
import {first} from "rxjs";
import {Recipe} from "../../_models/recipe";

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
    recipes: Recipe[] = [];

    constructor(private recipeService: RecipesService) {
    }

    ngOnInit(): void {
        this.recipeService.listRecipes()
            .pipe(first())
            .subscribe(recipes => this.recipes = recipes.sort((a, b) => {
                return a.id - b.id
            }))
    }


}
