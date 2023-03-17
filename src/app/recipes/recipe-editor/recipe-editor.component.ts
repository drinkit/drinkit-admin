import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Recipe} from "../../_models/recipe";
import {RecipesService} from "../../_services/recipes.service";

@Component({
    selector: 'app-recipe-editor',
    templateUrl: './recipe-editor.component.html',
    styleUrls: ['./recipe-editor.component.scss']
})
export class RecipeEditorComponent implements OnInit {

    recipe?: Recipe | null

    constructor(
        private route: ActivatedRoute,
        private service: RecipesService
    ) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            const id = params['id']
            this.service.getRecipe(id).subscribe(recipe => this.recipe = recipe)
        })
    }

}
