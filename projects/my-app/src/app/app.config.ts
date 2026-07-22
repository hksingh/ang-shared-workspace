import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { InMemoryDbService, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppMockData } from './shared/mock/app-mock.data';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideRouter(routes), 
      importProvidersFrom(
        InMemoryWebApiModule.forRoot(AppMockData, {delay: 1000, passThruUnknownUrl: true})
      )
  ],
};
