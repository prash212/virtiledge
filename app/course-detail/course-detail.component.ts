import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseDetailsService } from '../services/course-details.service';
import { FaqService } from '../services/faq.service';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  courseDetails: any = {
    course_title: ''
  };
  faqDetails: any;
  eventDetails: any;
  eventType: any;

  constructor(
    private courseDetailsService: CourseDetailsService,
    private faqService: FaqService,
    private route: ActivatedRoute,
    private eventsService: EventsService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getCourses(params['id']);
    });
  }

  getCourses(courseid) {
    this.courseDetailsService.getCoursDetails(courseid)
      .subscribe((response) => {
        this.courseDetails = response['courseDetails']['data']['0'];
        this.getFaq(courseid);
        this.getEvents(courseid);
      });
  }

  getFaq(courseid) {
    this.faqService.getFaq(courseid)
      .subscribe((response) => {
        this.faqDetails = response['faqDetailsRs']['data'];
      });
  }

  getEvents(courseid) {
    this.eventsService.getEventDetails(courseid)
      .subscribe((response) => {
        console.log(response);
        this.eventDetails = response['events']['data'];
        this.eventDetails = this.eventDetails.filter(function (el, i) {
          if (i < 4) {
            return el;
          }
        })
        console.log(this.eventDetails);
      });
  }

  filter: any = {
    eventType1: true,
    eventType2: true,
    eventType3: true
  };
  filterEvents() {
    console.log(!this.filter.eventType1);
    console.log(!this.filter.eventType2);
    console.log(!this.filter.eventType3);
  }

}




