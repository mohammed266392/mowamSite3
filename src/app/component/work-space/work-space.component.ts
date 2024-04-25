import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from '../../services/header.service';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormField } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule,DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-work-space',
  standalone: true,
  imports: [
    CommonModule,
    MatFormField,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  templateUrl: './work-space.component.html',
  styleUrl: './work-space.component.css',
  providers :  [
    { provide: MAT_DATE_LOCALE, useValue: 'fr' },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class WorkSpaceComponent {

  statusOptions = ['En cours', 'En analyse', 'Finis', 'Annulé']

  fb = inject(NonNullableFormBuilder);

  orderForm = this.fb.group({
    uid : [''],
    companyName : [''],
    fullName: [''],
    email : [''],
    dateOrder: Date,
    status:[''],
    ca:['']
  })

  companyName =  this.orderForm.get('companyName')
  fullName =  this.orderForm.get('fullName')
  email =  this.orderForm.get('email')
  dateOrder =  this.orderForm.get('dateOrder')
  status =  this.orderForm.get('status')
  ca =  this.orderForm.get('ca')

  constructor(private route: ActivatedRoute, 
    private headerService: HeaderService,
    private dateAdapter: DateAdapter<Date>) {
    const data = this.route.snapshot.data;
    if (data['header']) {
      this.headerService.setHeaderComponent(data['header']);
    }
    this.dateAdapter.setLocale('fr');
  }

  save(){

  }
}
