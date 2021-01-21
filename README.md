# libraries-and-books

## Introduction

This exercise aims at displaying a list of libraries with their associated number of books.

This project is [available for edition on StackBlitz ⚡️](https://stackblitz.com/edit/libraries-and-books) and each question is available via a dedicated branch of the project.


## Questions

### Question 1: Use a service mock

`AppComponent` is the root application component which needs a `LibraryService` to fetch and query the library repository. Unfortunately back-end APIs are not ready and therefore the [library.service.ts](./src/app/services/library.service.ts) file is not yet implemented. However a mock service has been implemented in [library.service.mock.ts](./src/app/services/library.service.mock.ts).


Make the necessary changes to the project so that the **whole application** is injected the `LibraryServiceMock` instead of the `LibraryService` whenever it is needed.
