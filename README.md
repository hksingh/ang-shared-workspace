# Creating an angular workspace

https://medium.com/@kssaravanan11/setting-up-a-multi-project-angular-workspace-for-code-reusability-3ea8bc390b94

## Setting up In Memory web api module
1. Install the library : npm install angular-in-memory-web-api
2. Make sure package.json has the entries with the version number.
3. Create an api data file which would implements InMemoryDbService
<code>
export class AppMockData implements InMemoryDbService {
    createDb() {
        const products = ProductData.products;
        const reviews = ReviewData.reviews;
        return { products, reviews };
    }
}
</code>
4. Ensure that is registered as a data provider in app.config.ts
    <code>
        export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideRouter(routes), 
      importProvidersFrom(
        InMemoryWebApiModule.forRoot(AppMockData, {delay: 1000, passThruUnknownUrl: true})
      )
  ],
};
    </code>

# AngSharedWorkspace

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.0.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
