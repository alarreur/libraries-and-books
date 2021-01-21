// angular
import { Injectable } from "@angular/core";

// rxjs
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

// local
import { Library, Book } from "../models";
import { LibraryService } from "./library.service";

@Injectable({ providedIn: "root" })
export class LibraryServiceMock implements Partial<LibraryService> {
  public getlibraryList(): Observable<Library[]> {
    return of([
      { id: 1, name: "The Shop Around The Corner" },
      { id: 2, name: "Fox Books" }
    ]).pipe(delay(2000));
  }

  public getBooksForLibrary(libraryId: number): Observable<Book[]> {
    let list: Book[] = [];

    switch (libraryId) {
      case 1:
        list = [
          { id: 1, title: "The Lord Of The Flies", nbPages: 452 },
          { id: 2, title: "The Da Vinci Code", nbPages: 598 },
          { id: 3, title: "Hamlet", nbPages: 431 }
        ];
        break;
      case 2:
        list = [
          { id: 1, title: "How to Make Friends", nbPages: 216 },
          { id: 2, title: "The Lord of the Ring", nbPages: 849 }
        ];
      default:
    }

    return of(list).pipe(delay(2000));
  }
}
