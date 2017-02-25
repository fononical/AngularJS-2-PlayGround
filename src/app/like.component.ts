import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LikeService } from './like.service';

@Component({
    selector: 'like',
    templateUrl: 'app/like.component.html',
    styleUrls: ['app/like.component.css']        
})
export class LikeComponent {
    @Input() totalLikes = 0;
    @Input() iLike = false;

    onClick() {
        this.iLike = !this.iLike;
        this.totalLikes += this.iLike ? 1 : -1;
    };

} 