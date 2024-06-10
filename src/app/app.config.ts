import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {getAuth, provideAuth} from '@angular/fire/auth'

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),
    importProvidersFrom([
      provideFirebaseApp(()=>initializeApp(environment.firebaseConfig)),
      provideAuth(()=>getAuth()) ])
  ] 
};
