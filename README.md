# BrowserReloadBug

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Background to the project structure

In our original application, where we found the error, we use an [Nx](https://nx.dev/) MonoRepo and the [@angular-architects/ddd](https://www.npmjs.com/package/@angular-architects/ddd) CLI-plugin to structure the application. That's why we have the app that implements the basic structure of the app, and in the lib directory we have the feature implementations itself.

The app directory has the AppComponent, that implements, next to other things, the main navigation. On every item of that navigation, we have a sub-navigation (sidenav) or partly also no sub-navigation. That's why we have a `<router-outlet>` on AppComponent and another `<router-outlet>` on these first sub-components. From there, the main window loads the feature connected to the activated route.

To get the data from the backend and and partly also for the behavior of the application (e.g. show/hide the toggle button for the sidenav in the main nav) we use [NgRX Store](https://ngrx.io/guide/store) and [Effects](https://ngrx.io/guide/effects). Because we split the application into domains in the lib directory with the Angular Architects CLI plugin, we also have multiple feature stores (one per domain).

## Project Structure

The `AppComponent` implements the main navigation bar and loads the children over `<router-outlet>`. The `TopSub1Component` implements a Sidenav for navigating through its domains/features and has another `<router-outlet>` to load its childs in the main container. In this example application, only one domain (Sub-Sub1) exists.

The main is filled with the data-components itself. We habe a `ComponentLoadComponent` and a `TopLoadComponent`. Both component subscribe to data from the NgRX store that is loaded from the backend. The backend call is mocked here in that case in the data service of the domain, but the error is the same with a HTTP call. The only difference between the two components is, that the `ComponentLoadComponent` triggers the load itself, while the `TopLoadComponent` does this not. There it is done in its parent component (`TopSub1Component`).

## Error-Description

This creates a specific situation using NgRX State and Effects that breaks the async pipe / change detection in the HTML of both data components besides the fact, that NgRx works properly. This can be proved by subscriptions in the corresponding typescript file of the broken HTML that log the current state values in the browser console.

IMPORTANT NOTE / ATTENTION: This error only occurs when NO plugins like "Redux DevTools", etc are installed in the browser. When you install e.g. the Redux DevTools, the error does NOT occur!

When you load one of the two "Sub-Sub1" components by clicking on the corresponding button, the async pipe breaks (see UI) besides the fact, that the data load through NgRx works fine. This is logged in the browser console using subscriptions.

In addition to that when you reload the `TopLoadComponent` window over the browser reload, where the data is loaded in the parent component, the async pipe also breaks on browser reload. In the `ComponentLoadComponent` the async pipe does not break on browser reload.

I tested it with the newest Firefox and Chrome versions (13.09.2023).
