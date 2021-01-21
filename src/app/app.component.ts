// angular
import { Component } from "@angular/core";

// rxjs
import { forkJoin, Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";

// local
import { LibraryService } from "./services";
import { Library } from "./models";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Libraries & Books";

  libraries$: Observable<Library[]>;
  totalBooks$: Observable<number>;

  constructor(private readonly libraryService: LibraryService) {
    this.libraries$ = libraryService.getlibraryList();
  }

  ngOnInit() {}
}
