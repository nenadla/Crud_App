import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {
  empForm !: FormGroup;

education: string[]=[
  'Matric',
  'Diploma',
  'Intermediate',
  'Graduate',
  'Post Graduate'
];

constructor(private fb: FormBuilder,
            private empServise: EmployeeService,
            private dialogRef: DialogRef<EmpAddEditComponent>){
  this.empForm = this.fb.group({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    gender: '',
    education:'',
    company:'',
    expirience:'',
    package: '', 
  })
}

onFormSubmit(){
  if(this.empForm.valid){
    this.empServise.addEmployee(this.empForm.value).subscribe({
      next: (val: any) => {
        alert('Employee added successfully');
        this.dialogRef.close();
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }
}


}
