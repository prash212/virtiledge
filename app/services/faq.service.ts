import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FaqService {

  constructor(
    private http:HttpClient
  ) { }

  getFaq(courseid){
    return this.http.get("http://www.virtiledge.com/service/faq.php?action=select&courseid="+courseid);
  }

}
