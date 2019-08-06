import { CanReadGuard } from './can-read.guard';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
imports: [CommonModule],
providers: [AdminGuard, AuthGuard, CanReadGuard]
})
export class GuardsManifest {}