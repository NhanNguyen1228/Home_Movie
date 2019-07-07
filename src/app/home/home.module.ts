import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { HeaderMenuComponent } from './header/header-menu/header-menu.component';
import { HeaderCenterComponent } from './header/header-center/header-center.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoaiPhimComponent } from './loai-phim/loai-phim.component';
import { PhimDangChieuComponent } from './loai-phim/phim-dang-chieu/phim-dang-chieu.component';
import { PhimSapChieuComponent } from './loai-phim/phim-sap-chieu/phim-sap-chieu.component';
import { ItemPhimComponent } from './loai-phim/item-phim/item-phim.component';
import { CinemaComponent } from './cinema/cinema.component';
import { NewsReviewComponent } from './news-review/news-review.component';
import { NewsComponent } from './news-review/news/news.component';
import { ReviewComponent } from './news-review/review/review.component';
import { FooterComponent } from './footer/footer.component';
import { FooterTopComponent } from './footer/footer-top/footer-top.component';
import { FooterBottomComponent } from './footer/footer-bottom/footer-bottom.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, HeaderMenuComponent, HeaderCenterComponent, CarouselComponent, LoaiPhimComponent, PhimDangChieuComponent, PhimSapChieuComponent, ItemPhimComponent, CinemaComponent, NewsReviewComponent, NewsComponent, ReviewComponent, FooterComponent, FooterTopComponent, FooterBottomComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
