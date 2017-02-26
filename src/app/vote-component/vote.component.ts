import { Component, Input, Output, EventEmitter, Injectable, ChangeDetectorRef, OnInit } from '@angular/core';

@Component({
    selector: 'vote',
    templateUrl: './vote.component.html',
    styleUrls: ['./vote.component.css']        
})
export class VoteComponent implements OnInit {

    @Input() initialVotes;
    private _totalVotes = this.initialVotes;
    private _voteStatus:VoteStatus =  VoteStatus.Neutral;

    private _isUpVoted:boolean = false;
    get isUpVoted():boolean {
        return (this._voteStatus == VoteStatus.Up) ? true : false;
    }

    private _isDownVoted:boolean = false;
    get isDownVoted():boolean {
        return (this._voteStatus == VoteStatus.Down) ? true : false;
    }

/*    constructor(private ref: ChangeDetectorRef){
        setInterval(() => {
            this.totalVotes = this.initialVotes;
            this.ref.markForCheck();
        }, 1000);
    }*/

    ngOnInit(): void {
        this._totalVotes = this.initialVotes;
    }

    onUpVoteClick() {
        if (this._voteStatus == VoteStatus.Down){
            this._voteStatus = VoteStatus.Neutral;
            this._totalVotes = this.initialVotes;
        }else{
            this._voteStatus = VoteStatus.Up;
            this._totalVotes = this.initialVotes + 1;
        }
    }

    onDownVoteClick() {
        if (this._voteStatus == VoteStatus.Up){
            this._voteStatus = VoteStatus.Neutral;
            this._totalVotes = this.initialVotes;
        }else{
            this._voteStatus = VoteStatus.Down;
            this._totalVotes = this.initialVotes - 1;
        }
    }

}

enum VoteStatus {
    Up = 1,
    Neutral = 0,
    Down = -1
} 