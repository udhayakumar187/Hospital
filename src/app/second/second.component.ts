import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

interface PhysicianDetails {
  physicianName: string;
  specialization: string;
  qualification: string;
  age: number;
  gender: string;
}

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  gender: string = 'male';
  userForm!: FormGroup;
  prescribedTestsOptions: string[] = ['General Medicine', 'General Physician', 'Pediatrics'];
  physicianDetails = [
    { physicianName: 'Test', specialization: 'General Medicine', qualification: 'MD', age: 30, gender: 'Male' },
    { physicianName: 'Test2', specialization: 'Pediatrics', qualification: 'MD', age: 35, gender: 'Female' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      qualification: new FormControl(''),
      age: new FormControl(''),
      physicianName: new FormControl(''),
      specialization: new FormControl([]),
      gender: new FormControl('')
    });
  }

  update(): void {
    const editedPhysician = {
      ...(this.userForm.value as PhysicianDetails),
      physicianName: this.userForm.controls['physicianName'].value,
    };

    const index = this.physicianDetails.findIndex(
      (physician) => physician.physicianName === editedPhysician.physicianName
    );
    this.physicianDetails[index] = editedPhysician;

    this.userForm.reset();
    this.gender = 'male';
  }

  reset() {
    this.userForm.reset();
    this.gender = 'male';
  }

  editPhysician(data: PhysicianDetails) {
    this.userForm.patchValue({
      qualification: data.qualification,
      age: data.age,
      physicianName: data.physicianName,
      specialization: data.specialization,
      gender: data.gender,
    });

    this.gender = data.gender;
  }

  deletePhysician(data: PhysicianDetails) {
    const index = this.physicianDetails.findIndex(
      (physician) => physician.physicianName === data.physicianName
    );
    this.physicianDetails.splice(index, 1);
  }
}
