import { Component } from "@angular/core";
import { pipe } from "rxjs";
import { MarvelService } from "./services/marvel-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "marvel-heroes";

  constructor(private marvelService: MarvelService) {
    this.printHeroes();
  }

  printHeroes() {
    this.marvelService.getHeroList();
  }
}
