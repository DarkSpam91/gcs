import { Component} from '@angular/core';
import { Http } from '@angular/http'
@Component({
  selector: 'app-content-courses',
  templateUrl: './content-courses.component.html',
  styleUrls: ['./content-courses.component.css']
})

export class ContentCoursesComponent {

  constructor(private  http: Http) { }
    
  InitCourses() {
    this.http.post('http://localhost/','')

  } 

}
