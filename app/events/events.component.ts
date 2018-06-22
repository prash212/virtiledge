import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import { CoursesService } from '../services/courses.service';
declare var $;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  eventDetails: any;
  courses: any;
  courseType: any = 'all';
  eventType: any = 'all';
  eventLocation: any = 'all';

  constructor(
    private eventsService: EventsService,
    private coursesService: CoursesService
  ) { }

  ngOnInit() {
    this.getCourses();
    this.getEvents('all');
    $('.custom-form').select2();
  }


  getEvents(courseid) {
    this.eventsService.getEventDetails(courseid)
      .subscribe((response) => {
        console.log(response);
        this.eventDetails = response['events']['data'];
        console.log(this.eventDetails);
      });
  }


  getCourses() {
    window.scroll(0, 0);
    this.coursesService.getCourses()
      .subscribe(response => {
        this.courses = response['courses']['data'];
        console.log(this.courses);
      })
  }

  searchEvents() {
    this.courseType;
    console.log(this.courseType);
    console.log(this.eventType);
    console.log(this.eventLocation);
    this.eventsService.filterEvents(this.courseType, this.eventType, this.eventLocation)
      .subscribe(response => {
        this.eventDetails = response['events']['data'];
        console.log(this.eventDetails);
      });
  }

}
