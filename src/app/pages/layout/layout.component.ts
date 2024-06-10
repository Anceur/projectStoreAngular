import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [FormsModule,RouterLink,CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent  implements OnInit {
  email :string='';
password : string = '';
constructor(private auth :AuthService){
  
}
ngOnInit(): void {
  
}
register(){
  if(this.email==''){
    alert('please enter email');
    return;
  }
  if(this.password==''){
    alert('please enter password');
    return;
  }
  this.auth.register(this.email,this.password);
  this.email='';
  this.password='';
}


}
