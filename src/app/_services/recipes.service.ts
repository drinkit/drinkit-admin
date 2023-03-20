import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";
import {Ingredient, Recipe} from "../_models/recipe";
import {AccountService} from "./account.service";
import {switchMap} from "rxjs";

@Injectable({providedIn: 'root'})
export class RecipesService {
    constructor(
        private http: HttpClient,
        private accountService: AccountService
    ) {
    }

    listRecipes() {
        return this.http.get<Recipe[]>(`${environment.apiUrl}/recipes?criteria=%7B%22ingredients%22%3A%5B%5D%2C%22cocktailTypes%22%3A%5B%5D%2C%22options%22%3A%5B%5D%7D`)
    }

    getRecipe(id: number) {
        return this.http.get<Recipe>(`${environment.apiUrl}/recipes/${id}`)
    }

    listIngredients() {
        return this.http.get<Ingredient[]>(`${environment.apiUrl}/ingredients`)
    }


    saveRecipe(recipe: Recipe) {
        if (recipe.id) {
            return this.http.put(`${environment.apiUrl}/recipes/${recipe.id}`, recipe, this.accountService.authHeaders())
                .pipe(switchMap(() => this.getRecipe(recipe.id)))
        } else {
            return this.http.post<Recipe>(`${environment.apiUrl}/recipes`, recipe, this.accountService.authHeaders())
        }
    }

    uploadImage(recipeId: number, image: any, thumbnail: any) {
        return this.http.post(`${environment.apiUrl}/recipes/${recipeId}/media`, {
            "image": image,
            "thumbnail": thumbnail
        }, this.accountService.authHeaders())
    }
}
