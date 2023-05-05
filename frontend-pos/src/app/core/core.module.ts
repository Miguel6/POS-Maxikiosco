import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapCacheManagerFactoryService} from './factories/map-cache-manager-factory.service';
import {MapCacheManagerService} from './cache/map-cache-manager.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    MapCacheManagerService,
    MapCacheManagerFactoryService,
  ]
})
export class CoreModule {
}
