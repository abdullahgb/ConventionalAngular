import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environments/environment';

@Pipe({
  name: 'assets'
})
export class AssetsPipe implements PipeTransform {
  transform(value: string): string {
    let assets = '';
    if (environment.development) {
      assets = './';
    } else {
      assets = '/admin/';
    }
    return assets + 'assets/' + value;
  }
}

