// angular
import { Injectable } from "@angular/core";

// rxjs
import { Observable } from "rxjs";

// // local
import { Library, Book } from "../models";

@Injectable({ providedIn: "root" })
export class LibraryService {
  public getlibraryList(): Observable<Library[]> {
    throw Error("Not implemented");
  }

  public getBooksForLibrary(libraryId: number): Observable<Book[]> {
    throw Error("Not implemented");
  }
}
