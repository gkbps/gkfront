// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'plightBox',
  templateUrl: './plightBox.html',
  styleUrls: ['./plightBox.scss'],
})

export class PLightBox implements OnInit {

  images: any[];

  constructor() {
      this.images = [];
      this.images.push({source:'assets/showcase/images/demo/lightbox/sopranos1.jpg', thumbnail: 'assets/showcase/images/demo/lightbox/sopranos1_small.jpg', title:'Sopranos 1'});
      this.images.push({source:'assets/showcase/images/demo/lightbox/sopranos2.jpg', thumbnail: 'assets/showcase/images/demo/lightbox/sopranos2_small.jpg', title:'Sopranos 2'});
      this.images.push({source:'assets/showcase/images/demo/lightbox/sopranos3.jpg', thumbnail: 'assets/showcase/images/demo/lightbox/sopranos3_small.jpg', title:'Sopranos 3'});
      this.images.push({source:'assets/showcase/images/demo/lightbox/sopranos4.jpg', thumbnail: 'assets/showcase/images/demo/lightbox/sopranos4_small.jpg', title:'Sopranos 4'});
  }

  ngOnInit() {
  }

}
