import { NgModule } from '@angular/core';
import { AssetsPipe } from '../../../../../../Icoons.Admin/src/app/core/pipes/assets.pipe';
@NgModule({
  imports: [],
  declarations: [AssetsPipe],
  exports: [AssetsPipe]
})
export class PipeModule {
  static forRoot() {
    return {
      ngModule: PipeModule,
      providers: []
    };
  }
}
