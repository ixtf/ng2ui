import { Component, OnInit, ViewContainerRef, trigger, state, style, transition, animate } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { Task } from '../../models';

@Component({
    templateUrl: 'task-update.component.html',
    styleUrls: ['./task-update.component.css'],
    animations: [
        trigger('heroState', [
            state('inactive', style({
                backgroundColor: '#eee',
                transform: 'scale(1)'
            })),
            state('active', style({
                backgroundColor: '#cfd8dc',
                transform: 'scale(1.1)'
            })),
            // transition('inactive => active', animate('100ms ease-in')),
            // transition('active => inactive', animate('100ms ease-out')),
            // transition('inactive => active, active => inactive', animate('100ms ease-out')),
            // transition('inactive <=> active', animate('100ms ease-out'))
            transition('* <=> *', animate('100ms ease-out'))
        ])
    ],
    providers: [MdSnackBar]
})
export class TaskUpdateComponent implements OnInit {
    task: Task;

    constructor(private snackBar: MdSnackBar,
                private viewContainerRef: ViewContainerRef) {
    }

    ngOnInit() {
        this.task = new Task();
    }

    onSubmit() {
        let config = new MdSnackBarConfig(this.viewContainerRef);
        this.snackBar.open('It didn\'t quite work!', 'Try Again', config);
    }
}
