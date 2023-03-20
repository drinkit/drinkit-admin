import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from "./recipes/recipes.component";
import {RecipeEditorComponent} from "./recipe-editor/recipe-editor.component";
import {ImageEditorComponent} from "./image-editor/image-editor.component";


const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Recipes',
        },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'search',
            },
            {
                path: 'search',
                component: RecipesComponent,
                data: {
                    title: 'Recipes Search'
                }
            },
            {
                path: 'edit/:id',
                component: RecipeEditorComponent,
                data: {
                    title: 'Recipe Editor'
                }
            },
            {
                path: 'new',
                component: RecipeEditorComponent,
                data: {
                    title: 'Recipe Editor'
                }
            },
            {
                path: 'edit/:id/image',
                component: ImageEditorComponent,
                data: {
                    title: 'Image Editor'
                }
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RecipesRoutingModule {
}

