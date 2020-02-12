import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {
    transform(array: any[], value: string) {
        if(value) {
            return array ? array.filter(item => 
                //item.ADDRESS.toUpperCase().search(value.toUpperCase()) > -1) : [];
                Object.keys(item).some(k => 
                    item[k].toString().toLowerCase().includes(value.toLowerCase()))
                ) : [];
                //Object.keys(item).some(k => item[k].toLowerCase().includes(value.toLowerCase()))) : [];
                //array.filter(x=>x.toLowerCase().indexOf(value.toLowerCase())!==-1)) : [];
        }
        return array;
    }
}
