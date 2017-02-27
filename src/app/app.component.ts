import { Component } from '@angular/core';
import { Tweet, TweetService } from './services/tweet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Angular App";
  isActive = true;

  tweets: Tweet[];

    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getTweets();
    };

  tweet = {
    totalLikes: 10,
    iLike: false,
    initialVotes: 12
  }

    onDivClick() {
      console.log("Handled by Div");
    };

    onClick($event) {
      $event.stopPropagation();
      console.log("Clicked", $event);
    };

    onFavoriteChange($event){
      console.log($event);
    };
}
