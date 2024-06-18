import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { YourManagerComponent } from './components/your-manager/your-manager.component';
import { FooterComponent } from './components/footer/footer.component';
import { BioComponent } from './components/bio/bio.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const LAYOUT_ROUTES: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  declarations: [
    NavbarComponent,
    BannerComponent,
    YourManagerComponent,
    FooterComponent,
    BioComponent,
    HomePageComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(LAYOUT_ROUTES)],
  exports: [
    NavbarComponent,
    BannerComponent,
    YourManagerComponent,
    FooterComponent,
    BioComponent,
  ],
})
export class LayoutModule {}
