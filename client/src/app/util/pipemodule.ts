import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {
    transform(array, value) {
        if(value) {
            return array ? array.filter(item => 
                Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(value.toLowerCase()))) : [];
        }
        return array;
    }
}
