import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  ngOnInit() {
    // Initialize Wow.js after the component is initialized
    //new WOW().init();
  }
}
