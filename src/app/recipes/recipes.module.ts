import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecipesComponent} from "./recipes/recipes.component";
import {RecipeEditorComponent} from "./recipe-editor/recipe-editor.component";
import {RecipesRoutingModule} from "./recipes-routing.module";
import {ButtonModule, FormModule, GridModule, TableModule} from "@coreui/angular";


@NgModule({
    declarations: [
        RecipesComponent,
        RecipeEditorComponent
    ],
    imports: [
        CommonModule,
        RecipesRoutingModule,
        TableModule,
        FormModule,
        GridModule,
        ButtonModule
    ]
})
export class RecipesModule {
}
