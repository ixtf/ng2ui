import {Component, OnInit} from "@angular/core";
import {MdlDefaultTableModel} from "angular2-mdl";
import {Task} from "../../models";

@Component({
    templateUrl: 'material-test.component.html'
})
export class MaterialTestComponent implements OnInit {
    tableData: [any] = [
        {title: 'title1', content: 'content1', percent: '10'},
        {title: 'title2', content: 'content2', percent: '20'},
        {title: 'title3', content: 'content3', percent: '30'},
    ];
    selected: Array<Task> = new Array<Task>();
    tableModel = new MdlDefaultTableModel([
        {key: 'title', name: 'Title', sortable: true},
        {key: 'content', name: 'Content', sortable: true},
        {key: 'percent', name: 'Percent', numeric: true},
    ]);

    disableTargaryens = true;
    disableBaratheon = true;

    progress: number = 0;

    constructor() {
        // Update the value for the progress-bar on an interval.
        setInterval(() => {
            this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
        }, 200);
    }

    ngOnInit() {
        this.tableModel.addAll(this.tableData);
    }

    selectionChanged($event: any) {
        this.selected = $event.value;
    }

    tabChanged($event: any) {
        console.log($event);
    }

}