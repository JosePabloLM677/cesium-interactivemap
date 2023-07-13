import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

(window as Record<string, any>)['CESIUM_BASE_URL'] = '/assets/Cesium/'

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
