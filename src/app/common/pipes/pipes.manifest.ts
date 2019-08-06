import { SanitizerPipe } from './sanitizer.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[CommonModule],
    declarations:[SanitizerPipe],
    exports:[SanitizerPipe]
}) export class PipesManifest {}