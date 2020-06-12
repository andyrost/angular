import { Component, Input, Output, EventEmitter } from '@angular/core'
import { IEvent } from './shared/index'
@Component({
    selector: 'event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.css']
})

export class EventComponent {
    @Input() event:IEvent
    @Output() eventClick = new EventEmitter()

    property:any = "value"

    handleAttend() {
        this.eventClick.emit('foo')
    }
    logFoo() {
        console.log('foo')
    }
}