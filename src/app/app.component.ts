// angular
import { Component } from "@angular/core";

// rxjs
import { forkJoin, Observable } from "rxjs";
import { map, shareReplay, switchMap } from "rxjs/operators";

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
    this.libraries$ = libraryService.getlibraryList().pipe(
      switchMap(libraries =>
        forkJoin(
          libraries.map(library =>
            this.libraryService.getBooksForLibrary(library.id).pipe(
              map(
                books =>
                  <Library>{
                    ...library,
                    books
                  }
              )
            )
          )
        )
      ),
      shareReplay(1)
    );

    this.totalBooks$ = this.libraries$.pipe(
      map(libraries =>
        libraries.reduce(
          (total, library) =>
            library.books ? total + library.books.length : total,
          0
        )
      )
    );
  }

  ngOnInit() {}
}
