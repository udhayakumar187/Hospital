import { FirstComponent } from './first/first.component';

import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from './common.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
@ViewChild('topLeft')
topleft!: any;
@ViewChild('#topRight') topRight!:ElementRef;
@ViewChild('center') center!:ElementRef;
@ViewChild('bottomLeft') bottomLeft!:ElementRef;
@ViewChild('bottomRight') bottomRight!:ElementRef;

  title :any;
  defaultColor : any;
  activeSpan = ""
  constructor( private common: CommonService, private router:Router) {

  }

  firstComp(){
    this.activeSpan = "consultation"
    this.router.navigate(['first'])
  }
  secondComp(){
    this.activeSpan = "physician"
    this.router.navigate(['second'])
  }
}
