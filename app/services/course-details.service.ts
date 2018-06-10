import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CourseDetailsService {

  constructor(
    private http: HttpClient
  ) { }

  getCoursDetails(courseid){
    return this.http.get("http://www.virtiledge.com/service/course-details.php?action=select&courseid="+courseid);
  }

}
