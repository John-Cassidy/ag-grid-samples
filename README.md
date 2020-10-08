# AgGridSamples

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.10.

Sample code taken from [Add ag-Grid to your Project](https://www.ag-grid.com/angular-grid/#add-ag-grid-to-your-project)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## VSCode extensions and settings

npm i -D angular-unit-test-helper
npm i -D dev-norms
npm i -D dotenv
npm i -D npm-run-all

npm i -D prettier tslint-config-prettier tslint-plugin-prettier
npm i -D js-beautify
npm i -D import-sort import-sort-cli import-sort-parser-typescript import-sort-style-module
npm i -D tslint tslint-etc

npm i -D open-cli
npm i -D rimraf
npm i -D yargs

npx mrm angular-vscode

npm i @angular/material
npm i @angular/flex-layout

## Commands

Run the following commands before committing your code to ensure styles and linting properly applied to the project:

npm run style:fix - automatically format code files as per styling rules
npm run lint:fix - automatically fix auto-fixable linting errors

## Components

npx ng g c home -m app --inline-template --inline-style
npx ng g c simplegrid -m app --inline-style
npm ng g c chartgrid -m app --inline-style
