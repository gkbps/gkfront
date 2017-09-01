// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Message } from 'primeng/primeng';

@Component({
  selector: 'pupload',
  templateUrl: './pupload.html',
  styleUrls: ['./pupload.scss'],
})

export class PUpload implements OnInit {

  list1 = [
    { 'id': 'tcode01', 'desc': 'TCode 01' },
    { 'id': 'tcode08', 'desc': 'TCode 08' },
    { 'id': 'tcode02', 'desc': 'TCode 02' },
    { 'id': 'tcode06', 'desc': 'TCode 06' },
    { 'id': 'tcode03', 'desc': 'TCode 03' },
    { 'id': 'tcode07', 'desc': 'TCode 07' },
    { 'id': 'tcode04', 'desc': 'TCode 04' },
    { 'id': 'tcode05', 'desc': 'TCode 05' },
  ];

  list2 = [
    { 'id': 'tcode05', 'desc': 'TCode 05' },
    { 'id': 'tcode07', 'desc': 'TCode 07' },
    { 'id': 'tcode10', 'desc': 'TCode 10' },
    { 'id': 'tcode02', 'desc': 'TCode 02' },
    { 'id': 'tcode09', 'desc': 'TCode 09' },
  ];

  constructor(
  ) { }

  ngOnInit() {
    console.log('inBoth:', this.inBoth(this.list1, this.list2));
    console.log('inFirstOly:', this.inFirstOnly(this.list1, this.list2));
    console.log('inSecondOnly:', this.inSecondOnly(this.list1, this.list2));

    // Sorting
    this.list1.sort(function(a, b) {
    const nameA = a.id.toLowerCase();
    const nameB = b.id.toLowerCase();

    if (nameA < nameB) {
      // sort string ascending
      return -1;
    }

    if (nameA > nameB) {
      return 1;
    }

    return 0; // Default return value (no sorting)
    });
    console.log(this.list1);
  }

  operation(list1, list2, isUnion) {
      return list1.filter( a => isUnion === list2.some( b => a.id === b.id ) );
  }

  inBoth(list1, list2) {
      return this.operation(list1, list2, true);
  }

  inFirstOnly(list1, list2) {
      return this.operation(list1, list2, false);
  }

  inSecondOnly(list1, list2) {
      return this.inFirstOnly(list2, list1);
  }


  msgs: Message[];

  uploadedFiles: any[] = [];

  onUpload(event) {
      for(let file of event.files) {
          this.uploadedFiles.push(file);
      }

      this.msgs = [];
      this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
}
