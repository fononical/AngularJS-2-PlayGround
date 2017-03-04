import { Component, Input, Output, EventEmitter, Injectable, ChangeDetectorRef, OnInit } from '@angular/core';

@Component({
    selector: 'zippy',
    templateUrl: './zippy.component.html',
    styleUrls: ['./zippy.component.css']        
})
export class ZippyComponent {

    @Input() isExpanded:boolean = false;
    @Input() title:string = "";

    onHeaderClicked() {
        this.isExpanded = !this.isExpanded;
    }

}