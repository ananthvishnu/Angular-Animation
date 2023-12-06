import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrum',
  templateUrl: './breadcrum.component.html',
  styleUrls: ['./breadcrum.component.css']
})
export class BreadcrumComponent {
  @Input() pageTitle:any;
  @Input() homeLink:any;
  @Input() homeText:any;
  @Input() pagesLink:any;
  @Input() pagesText:any;
  @Input() currentText:any;
}
