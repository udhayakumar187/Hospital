import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonService } from '../common.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit{
  gender:any = 'male'
  username: any;
  userForm!: FormGroup;
  patientDetails :any = []
  tableData: any = [];
  prescribedTestsOptions: string[] = ['CBC', 'Chemistry', 'RTC'];
  prescribedTestsSelected: string[] = [];
  chartData:any;
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5']
  };
  chartOptions: any ;

  single: any[] = []; // Your chart data

  constructor( private fb:FormBuilder) {


   }


  ngOnInit(): void {
    this.userForm = this.fb.group({
      patientName : new FormControl(''),
      age : new FormControl(''),
      physicianName : new FormControl(''),
      prescribedTests : new FormControl([]),
      gender: new FormControl('')
    })

  }
save(){
  console.log(this.userForm?.value)
this.patientDetails.push(this.userForm?.value)

    this.userForm.reset();

}
reset(){
  this.userForm?.reset()
}
}
