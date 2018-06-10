import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventsService {

  constructor(
    private http:HttpClient
  ) { }

  getEventDetails(courseid){
    return this.http.get("http://www.virtiledge.com/service/events.php?action=select&courseid="+courseid);
  }

}
