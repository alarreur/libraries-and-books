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
      { id: 1, name: "Library 1" },
      { id: 2, name: "Library 2" }
    ]).pipe(delay(2000));
  }

  public getBooksForLibrary(libraryId: number): Observable<Book[]> {
    let list: Book[] = [];

    switch (libraryId) {
      case 1:
        list = [
          { id: 1, title: "The Lord Of The Flies", nbPages: 452 },
          { id: 2, title: "The Da Vinci Code", nbPages: 598 }
        ];
      case 2:
        list = [
          { id: 1, title: "The Lord Of The Flies", nbPages: 452 },
          { id: 2, title: "The Da Vinci Code", nbPages: 598 }
        ];
      default:
    }

    return of(list).pipe(delay(2000));
  }
}
