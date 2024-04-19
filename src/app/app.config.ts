import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { InMemoryScrollingFeature, InMemoryScrollingOptions, provideRouter, withInMemoryScrolling } from '@angular/router';
import { initializeApp } from "firebase/app";
import {provideFirebaseApp} from '@angular/fire/app'
import { firebaseConfig } from './environments/environment';
import {provideAuth, getAuth} from '@angular/fire/auth'
import {getFirestore,provideFirestore} from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { routes } from './app.routes';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};


const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);


export const appConfig: ApplicationConfig = {
  providers: [
      provideRouter(routes, inMemoryScrollingFeature),
      provideAnimationsAsync(),
      importProvidersFrom([
        provideFirebaseApp(() => initializeApp(firebaseConfig)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        provideStorage(() => getStorage()),
        MatSnackBarModule
    ])
  ]
  };
