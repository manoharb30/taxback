import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-notfound',
    template: `
    <div class = "container">
        <p> Link not Found 
            Wish to go back to <a routerLink = "/"> Home </a>
        <p> 
    </div>
     `
})

export class NotFoundComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}