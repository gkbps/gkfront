// External
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Message, ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'pconfirmDialog',
  templateUrl: './pconfirmDialog.html',
  styleUrls: ['./pconfirmDialog.scss'],
})

export class PConfirmDialog implements OnInit {

  msgs: Message[] = [];

    constructor(private confirmationService: ConfirmationService) {}

    ngOnInit() {

    }

    confirm1() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'fa fa-question-circle',
            accept: () => {
                this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
            },
            reject: () => {
                this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
            }
        });
    }

    confirm2() {
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: () => {
                this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
            },
            reject: () => {
                this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
            }
        });
    }

}
