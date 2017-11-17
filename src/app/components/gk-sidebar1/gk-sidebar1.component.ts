import { Component, Input, OnInit } from '@angular/core';
//declare var jQuery: any;

@Component({
  selector: 'gk-sidebar1',
  templateUrl: './gk-sidebar1.component.html'
})
export class GkSidebar1Component implements OnInit {

  @Input() menu:any;

  constructor() {

  }

  ngOnInit() {
  }

}
