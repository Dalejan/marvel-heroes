import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import { Md5 } from "ts-md5/dist/md5";

@Injectable({
  providedIn: "root",
})
export class MarvelService {
  private BASE_URL = "https://gateway.marvel.com:443/";
  private PUBLIC_KEY = "6647d5802a99f589a3cfc965ec856af2";

  constructor(private http: HttpClient) {}

  getHeroList() {
    return this.http
      .get(
        `${this.BASE_URL}v1/public/characters?apikey=${this.PUBLIC_KEY}&limit=90`
      )
      .subscribe((res: any) => console.log(res.data));
  }
}
