import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { provideFirebaseApp } from '@angular/fire/app';
import { RouterLink, RouterOutlet } from '@angular/router';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,CommonModule,RouterLink
      
    ]
})
export class AppComponent {
  title = 'app-store';
}
