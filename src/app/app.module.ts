//// CORE ANGULARJS FRAMEWORK & LIBRARIES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/// AUXILIARY FRAMEWORKS & LIBRARIES

/// COMPONENTS
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';
import { RatingComponent } from './rating.component';

/// SERVICES
import { CourseService } from './course.service';
import { AuthorService } from './author.service';

/// DIRECTIVES
import { AutoGrowDirective } from './auto-grow.directive';

@NgModule({
  declarations: [
    AppComponent,
    AutoGrowDirective,
    CoursesComponent,
    AuthorsComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CourseService, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
