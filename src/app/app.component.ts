// angular
import { Component } from "@angular/core";

// rxjs
import { Observable } from "rxjs";

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

  constructor(private readonly libraryService: LibraryService) {}

  ngOnInit() {}
}
