import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";
import {Recipe} from "../_models/recipe";

@Injectable({providedIn: 'root'})
export class RecipesService {
    constructor(
        private http: HttpClient,
    ) {
    }

    listRecipes() {
        return this.http.get<Recipe[]>(`${environment.apiUrl}/recipes?criteria=%7B%22ingredients%22%3A%5B%5D%2C%22cocktailTypes%22%3A%5B%5D%2C%22options%22%3A%5B%5D%7D`)
    }

    getRecipe(id: number) {
        return this.http.get<Recipe>(`${environment.apiUrl}/recipes/${id}`)
    }

}
