// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ppie',
  templateUrl: './ppie.html',
  styleUrls: ['./ppie.scss'],
})

export class PPie implements OnInit {

  data: any;

  constructor() {
      this.data = {
          labels: ['A','B','C'],
          datasets: [
              {
                  data: [300, 50, 100],
                  backgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ],
                  hoverBackgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ]
              }]
          };
  }

  ngOnInit() {
  }

}
