import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  request:any = {}
  constructor() { }

  ngOnInit() {
  }

  postRequestCallback(){
    console.log(this.request);
  }

}
