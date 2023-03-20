import {Component} from '@angular/core';
import {Recipe} from "../../_models/recipe";
import {ActivatedRoute} from "@angular/router";
import {RecipesService} from "../../_services/recipes.service";
import {ImageCroppedEvent, LoadedImage} from "ngx-image-cropper";
import {NgxImageCompressService} from "ngx-image-compress";

@Component({
    selector: 'app-image-cropper',
    templateUrl: './image-editor.component.html',
    styleUrls: ['./image-editor.component.scss']
})
export class ImageEditorComponent {

    recipe?: Recipe | null
    imageChangedEvent: any = '';
    originalImage: any = '';
    croppedImage: any = '';
    compressedImage: any = '';

    constructor(
        private route: ActivatedRoute,
        private service: RecipesService,
        public imageCompress: NgxImageCompressService
    ) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            const id = params['id']
            this.service.getRecipe(id).subscribe(recipe => this.recipe = recipe)
        })
    }

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }

    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
        this.imageCompress.compressFile(event.base64!, 0, undefined, 50, 132, 176).then(result => {
            this.compressedImage = result;
        })
    }

    imageLoaded(image: LoadedImage) {
        this.originalImage = image.original.base64
    }

    cropperReady() {
        // cropper ready
    }

    loadImageFailed() {
        // show message
    }

    onSubmit() {
        this.service.uploadImage(this.recipe!.id, this.croppedImage, this.compressedImage).subscribe(it => {
            console.log(it)
        })
    }
}
