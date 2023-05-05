import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CacheManagerFactoryService} from './factories/cache-manager-factory.service';
import {CacheManagerService} from './cache/cache-manager.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    CacheManagerService,
    CacheManagerFactoryService
  ]
})
export class CoreModule {
}
