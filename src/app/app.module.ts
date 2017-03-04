//// CORE ANGULARJS FRAMEWORK & LIBRARIES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/// AUXILIARY FRAMEWORKS & LIBRARIES
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

/// COMPONENTS
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';
import { RatingComponent } from './rating.component';
import { LikeComponent } from './like.component';
import { VoteComponent } from './vote-component/vote.component';
import { TweetComponent } from './tweet-component/tweet.component';
import { ZippyComponent } from './zippy-component/zippy.component';

/// SERVICES
import { CourseService } from './course.service';
import { AuthorService } from './author.service';
import { LikeService } from './like.service';
import { TweetService } from './services/tweet.service';

/// DIRECTIVES
import { AutoGrowDirective } from './auto-grow.directive';

@NgModule({
  declarations: [
    AppComponent,
    AutoGrowDirective,
    TweetComponent,
    CoursesComponent,
    AuthorsComponent,
    RatingComponent,
    LikeComponent,
    VoteComponent,
    ZippyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule
  ],
  providers: [CourseService, AuthorService, LikeService, TweetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
