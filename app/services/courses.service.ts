import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CoursesService {

  constructor(
    private http:HttpClient
  ) { }

  getCourses(){
    return this.http.get("http://www.virtiledge.com/service/courses.php?action=select");
  }

}
