import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EoNgTabsModule } from 'eo-ng-tabs';
import { ApiSharedModule } from 'pc/browser/src/app/pages/workspace/project/api/api-shared.module';
import { SharedModule } from 'pc/browser/src/app/shared/shared.module';

import { GroupComponent } from './group.component';

@NgModule({
  declarations: [GroupComponent],
  imports: [
    RouterModule.forChild([
      {
        path: 'edit',
        component: GroupComponent
      }
    ]),
    SharedModule,
    EoNgTabsModule,
    ApiSharedModule
  ],
  exports: [GroupComponent]
})
export class GroupModule {}
