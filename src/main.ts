import { createApplication } from '@angular/platform-browser';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { ApplicationConfig, enableProdMode } from '@angular/core';
import { APP_ROUTES } from './app/app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appFeature, appReducer } from './app/+state/app.reducer';
import { provideEffects } from '@ngrx/effects';
import { AppEffects } from './app/+state/app.effects';
import { DatePipe, DecimalPipe } from '@angular/common';
import { provideSubSub1Domain } from './app/app-ngrx-states';

if (environment.production) {
  enableProdMode();
}

// We use async create/bootstrap, because we initialize e.g. Keycloak and other things before the bootstrap itself.
(async () => {
  const app = await createApplication({
    providers: [
      provideHttpClient(withInterceptorsFromDi()),
      provideRouter(
        APP_ROUTES,
        withInMemoryScrolling({
          anchorScrolling: 'enabled',
        })
      ),
      provideStore(appReducer, {
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }),
      provideState(appFeature),
      provideEffects([AppEffects]),
      provideStoreDevtools({
        maxAge: 25, // Retains last 25 states
      }),
      provideAnimations(),
      provideSubSub1Domain(),
      DatePipe,
      DecimalPipe,
    ],
  } as ApplicationConfig);

  await app.bootstrap(AppComponent);
})();
