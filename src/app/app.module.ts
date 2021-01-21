import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import "hammerjs";
import { DragDropModule } from "@angular/cdk/drag-drop";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatGridListModule,
  MatMenuModule,
  MatSlideToggleModule,
  MatDatepickerModule,
  MatAutocompleteModule,
  MatRadioModule,
  MatCheckboxModule,
  MatSelectModule,
  MatTableModule
} from "@angular/material";
import {} from "@angular/material";
import { AppComponent } from "./app.component";
import { LibraryService, LibraryServiceMock } from "./services";

import {
  AccordionModule,
  PanelModule,
  ButtonModule,
  RadioButtonModule,
  CalendarModule
} from "primeng/primeng";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    DragDropModule,

    // primeng modules
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    CalendarModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
