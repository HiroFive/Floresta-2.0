import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { AppEnvironment } from 'common/enums/app/app-environment.enum';

if (process.env.NODE_ENV === AppEnvironment.DEVELOPMENT) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
