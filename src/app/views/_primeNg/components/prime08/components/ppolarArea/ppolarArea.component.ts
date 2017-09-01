// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ppolarArea',
  templateUrl: './ppolarArea.html',
  styleUrls: ['./ppolarArea.scss'],
})

export class PPolarArea implements OnInit {

  data: any;

  constructor() {
      this.data = {
          datasets: [{
              data: [
                  11,
                  16,
                  7,
                  3,
                  14
              ],
              backgroundColor: [
                  "#FF6384",
                  "#4BC0C0",
                  "#FFCE56",
                  "#E7E9ED",
                  "#36A2EB"
              ],
              label: 'My dataset'
          }],
          labels: [
              "Red",
              "Green",
              "Yellow",
              "Grey",
              "Blue"
          ]
      }
  }

  ngOnInit() {

  }
  
}
