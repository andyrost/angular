import {Component} from '@angular/core';

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})

export class EventsListComponent {
    event = {
        id:1,
        name:'My First Event',
        date: '6/9/20',
        time:'10:00 AM',
        price: 600.00,
        imageUrl: 'assets/images/angularconnect-shield.png',
        location: {
            address: '226 East Church St',
            city: 'Ligonier',
            state: 'PA',
            country: 'USA'

        }
    }
    handleEventClicked(data) {
        console.log('recieved:', data)
    }

}