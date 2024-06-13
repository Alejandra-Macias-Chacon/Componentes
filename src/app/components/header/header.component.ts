import { Component, Input, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  {
  @Input() titulo:string=' '
  constructor() { }

  ngOnInit() {}

}
