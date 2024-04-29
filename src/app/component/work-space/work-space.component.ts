import { Component, OnInit, inject } from '@angular/core';
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
import { NotificationService } from '../../services/notification.service';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order';
import { MatTableModule } from '@angular/material/table';
import { FirebaseTimestampPipe } from '../../pipes/FirebaseTimestampPipe';
import { BehaviorSubject, Observable } from 'rxjs';

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
    MatSelectModule,
    MatTableModule,
    FirebaseTimestampPipe
  ],
  templateUrl: './work-space.component.html',
  styleUrl: './work-space.component.css',
  providers :  [
    { provide: MAT_DATE_LOCALE, useValue: 'fr' },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class WorkSpaceComponent implements OnInit {


  displayedColumns: string[] = ['companyName', 'fullName', 'email', 'dateOrder', 'status', 'ca'];
  orders: Observable<Order[]>;



  statusOptions = ['En cours', 'En analyse', 'Finis', 'Annulé']

  fb = inject(NonNullableFormBuilder);
  notification = inject(NotificationService);
  orderService = inject(OrderService)

  orderForm = this.fb.group({
    companyName : [''],
    fullName: [''],
    email : [''],
    dateOrder: [Date],
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
    this.notification.hidLoading2();
    this.orders = this.orderService.orders$
  }
  ngOnInit(): void {
    // const test = this.orderService.getList()
    // console.log("voir mon test ",test )
    // this.orderService.getList().then(orders => {
    //   this.dataSource = orders
    //   console.log("sfsd",orders) ;
    // }).catch(error => {
    //   console.error('Erreur lors de la récupération des orders:', error);
    // });
    this.orderService.getAllOrders();

  }

  save(){
    if(!this.orderForm.valid){
      this.notification.error("Les éléments renseignées ne sont pas aux normes")
      return;
    }

    const{companyName, fullName,email, dateOrder, status, ca} = this.orderForm.value ;

    const orderInstance = this.orderForm.value as unknown as Order
    // const orderInstance = new Order(companyName,fullName,email, new Date(), status, ca);

    this.orderService.addOrder(orderInstance)
 
  }
}
