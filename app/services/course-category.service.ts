import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CourseCategoryService {

  constructor(
    private http:HttpClient
  ) { }

  getCourseCategories(){
    return this.http.get("http://www.virtiledge.com/service/course_category.php?action=select");
  }

}
