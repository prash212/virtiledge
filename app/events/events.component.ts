import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  eventDetails: any;
  constructor(
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    this.getEvents('all'); 
  }


  getEvents(courseid) {
    this.eventsService.getEventDetails(courseid)
      .subscribe((response) => {
        console.log(response);
        this.eventDetails = response['events']['data'];
        console.log(this.eventDetails);
      });
  }

}
