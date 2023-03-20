import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecipesComponent} from "./recipes/recipes.component";
import {RecipeEditorComponent} from "./recipe-editor/recipe-editor.component";
import {RecipesRoutingModule} from "./recipes-routing.module";
import {
    ButtonGroupModule,
    ButtonModule,
    CardModule,
    FormModule,
    GridModule,
    TableModule,
    UtilitiesModule
} from "@coreui/angular";
import {ImageEditorComponent} from './image-editor/image-editor.component';
import {ImageCropperModule} from "ngx-image-cropper";
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        RecipesComponent,
        RecipeEditorComponent,
        ImageEditorComponent
    ],
    imports: [
        CommonModule,
        RecipesRoutingModule,
        TableModule,
        FormModule,
        GridModule,
        ButtonModule,
        ImageCropperModule,
        CardModule,
        UtilitiesModule,
        FormsModule,
        ButtonGroupModule
    ]
})
export class RecipesModule {
}
