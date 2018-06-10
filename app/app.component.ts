import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../app/common/header/header.component'
import { CourseCategoryService } from './services/course-category.service';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  courseCategory: any;
  courses: any;
  coursesMenu:any;

  constructor(
    private courseCategoryService: CourseCategoryService,
    private coursesService: CoursesService
  ) {
    this.getCourseCategories();
    
  }

  ngOnInit() {
    
  }

  getCourseCategories() {
    var current = this;
    this.courseCategoryService.getCourseCategories()
      .subscribe((response) => {
        console.log(response);
        current.courseCategory = response['courseCategory']['data'];
        console.log(current.courseCategory);
        current.getCourses();
      })
  }

  getCourses() {
    this.coursesService.getCourses()
      .subscribe((response) => {
        console.log(response);
        this.courses = response['courses']['data'];

        // to load first menu course list
        this.course_list(this.courseCategory[0].cc_id_pk);
      });
  }

  course_list(courseCategoryId){
    console.log("menu "+courseCategoryId);
    this.coursesMenu = this.courses.filter(function(el, index){
        return el.course_cc_id_fk == courseCategoryId;
    })
    console.log(this.coursesMenu);
  }

}
