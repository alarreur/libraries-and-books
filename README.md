# libraries-and-books

## Introduction

This exercise aims at displaying a list of libraries with their associated number of books.

This project is available for edition on [⚡️ StackBlitz](https://stackblitz.com/github/alarreur/libraries-and-books). Each question has a specific branch. To complete the exercise, go through each question by navigating the project with the following links/branches:
* ⚡️ [question 1](https://stackblitz.com/github/alarreur/libraries-and-books/tree/q1)
* ⚡️ [question 2](https://stackblitz.com/github/alarreur/libraries-and-books/tree/q2)
* ⚡️ [question 3](https://stackblitz.com/github/alarreur/libraries-and-books/tree/q3)
* ⚡️ [question 4](https://stackblitz.com/github/alarreur/libraries-and-books/tree/q4)


## Questions

### Question 1: Use a service mock

`AppComponent` is the root application component which needs a `LibraryService` to fetch and query the library repository. Unfortunately back-end APIs are not ready and therefore the [library.service.ts](./src/app/services/library.service.ts) file is not yet implemented. However a mock service has been implemented in [library.service.mock.ts](./src/app/services/library.service.mock.ts).


Make the necessary changes to the project so that the **whole application** is injected the `LibraryServiceMock` instead of the `LibraryService` whenever it is needed.

### Question 2: Consume the services

Now that we have a mock service setup, we would like to display the list of libraries' ids and names in a table. While fetching the data we want the table to display a loader.

Make the necessary changes in [app.component.ts](./src/app/app.component.ts) and [app.component.html](./src/app/app.component.html) to fetch the libray list from the service mock and display the result in the table.

### Question 3: Number of books

We want to display the number of books each library has in the existing table. 

Make the necessary changes in [app.component.ts](./src/app/app.component.ts) and [app.component.html](./src/app/app.component.html) to display the number of books per library.

### Question 4: Total number of books

We want to display the total number of books for every library in the existing table. 

Make the necessary changes in [app.component.ts](./src/app/app.component.ts) and [app.component.html](./src/app/app.component.html) to display the total number of books in the table footer.