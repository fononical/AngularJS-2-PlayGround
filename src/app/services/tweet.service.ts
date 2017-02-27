import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';


@Injectable()
export class TweetService {

    getTweets() : Tweet[] {
        const tweets: Tweet[] = [
            {imageURL: "http://lorempixel.com/100/100/people/", header: "Brunch Time", handle: "@wicked_critic", message: "Brunch at some café was great!!", likes: 10},
            {imageURL: "http://lorempixel.com/100/100/people/", header: "Protests in La Mesa", handle: "@localreporter", message: "Anti Trump protest in La Mesa Civic Center!", likes: 43},
            {imageURL: "http://lorempixel.com/100/100/people/", header: "Fun at Farmer's Market", handle: "@humble_farmer", message: "Come and have local produce.", likes: 29},
            {imageURL: "http://lorempixel.com/100/100/people/", header: "UFO Sighting", handle: "@redfox51", message: "Local high school students report having spotted an UFO hovering over football field.", likes: 274},
            {imageURL: "http://lorempixel.com/100/100/people/", header: "Yard Sale at University and 44th St.", handle: "@chindigiri", message: "Moving Sale! Low Prices!", likes: 4}
        ];
        return tweets;
    }

}


export class Tweet {

    public imageURL:string;
    public header:string;
    public handle:string;
    public message:string;
    public likes:number;

    public constructor(imageURL:string, header:string, handle:string, message:string, likes:number) {
        this.imageURL = imageURL;
        this.header = header;
        this.handle = handle;
        this.message = message;
        this.likes = likes;
    }

} 