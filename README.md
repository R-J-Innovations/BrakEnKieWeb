# BrakEnKieWeb

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.5.

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

## Deploy to GitHub Pages

This repo is configured to deploy via GitHub Actions to GitHub Pages.

### One-time setup in GitHub

1. Push to GitHub (default branch: `master`).
2. In your repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.

### How it works

- The workflow builds with a repository base path (for example `/BrakEnKieWeb/`).
- Only the static output folder is deployed: `dist/BrakEnKieWeb/browser`.
- Routing uses hash URLs so refresh/deep links work on GitHub Pages.

Example URLs:

- `https://<username>.github.io/BrakEnKieWeb/`
- `https://<username>.github.io/BrakEnKieWeb/#/puppies`

### Local GitHub Pages build

```bash
npm run build:gh-pages
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

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
