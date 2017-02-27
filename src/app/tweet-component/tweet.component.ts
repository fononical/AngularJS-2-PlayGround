import { Component, Input, Output, EventEmitter, Injectable } from '@angular/core';

@Component({
    selector: 'tweet',
    templateUrl: './tweet.component.html',
    styleUrls: ['./tweet.component.css'],        
})
export class TweetComponent {

    @Input() imageURL:string;
    @Input() header:string;
    @Input() handle:string;
    @Input() message:string;
    @Input() likes:number;
    
}