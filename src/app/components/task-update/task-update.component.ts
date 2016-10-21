import {Component, OnInit, ViewContainerRef} from "@angular/core";
import {MdlSnackbarService} from "angular2-mdl";
import {Task} from "../../models";

@Component({
    templateUrl: 'task-update.component.html',
    styleUrls: ['./task-update.component.css'],
    providers: [MdlSnackbarService]
})
export class TaskUpdateComponent implements OnInit {
    task: Task;

    constructor(private mdlSnackbarService: MdlSnackbarService,
                private viewContainerRef: ViewContainerRef) {
    }

    ngOnInit() {
        this.task = new Task();
    }

    onSubmit() {
        this.mdlSnackbarService.showSnackbar({
            message: 'The Message',
            action: {
                handler: ()=> {
                    this.mdlSnackbarService.showToast('You hit the ok Button');
                },
                text: 'OK'
            }
        });
    }
}