import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: true
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string, searchKey: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    return items.filter(item => {
        return String(item[searchKey]).toLowerCase().includes(searchText.toLowerCase());
    });
   }
}
