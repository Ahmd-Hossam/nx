import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ListComponent, BannerComponent],
  exports: [ListComponent, BannerComponent],
})
export class UiModule {}
