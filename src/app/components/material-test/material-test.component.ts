import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'material-test.component.html'
})
export class MaterialTestComponent implements OnInit {
    isDarkTheme: boolean = false;

    foods: any[] = [
        {name: 'Pizza', rating: 'Excellent'},
        {name: 'Burritos', rating: 'Great'},
        {name: 'French fries', rating: 'Pretty good'},
    ];

    progress: number = 0;

    constructor() {
        // Update the value for the progress-bar on an interval.
    }

    ngOnInit() {
        setInterval(() => {
            this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
        }, 200);
    }

}
