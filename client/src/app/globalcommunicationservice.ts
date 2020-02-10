import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class GlobalCommunicationService {
    private messageSource = new BehaviorSubject('Main Page');
    currentMessage = this.messageSource.asObservable();

    getData() {
        return name;
    }

    changeData(data: string) {
        this.messageSource.next(data);
    }
}