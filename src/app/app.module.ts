import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { SearchbarComponent } from "./components/searchbar/searchbar.component";
import { HeroesContainerComponent } from "./components/heroes/heroes-container/heroes-container.component";
import { ComicsContainerComponent } from "./components/comics/comics-container/comics-container.component";
import { HeroFilterComponent } from "./components/heroes/hero-filter/hero-filter.component";
import { HeroCardComponent } from "./components/heroes/hero-card/hero-card.component";
import { ComicCardComponent } from "./components/comics/comic-card/comic-card.component";
import { ComicDetailComponent } from "./components/comics/comic-detail/comic-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    HeroCardComponent,
    ComicCardComponent,
    ComicDetailComponent,
    HeroesContainerComponent,
    ComicsContainerComponent,
    HeroFilterComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
