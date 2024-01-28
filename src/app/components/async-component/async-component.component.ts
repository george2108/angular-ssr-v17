import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { Component, afterNextRender, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { FetchDataService } from '../../services/fetch-data.service';

@Component({
  selector: 'app-async',
  standalone: true,
  templateUrl: './async-component.component.html',
  styleUrl: './async-component.component.scss',
  imports: [JsonPipe, CommonModule, AsyncPipe],
})
export class AsyncComponentComponent {
  private readonly fetchDataService = inject(FetchDataService);

  data$: Observable<any> = this.fetchDataService.getData();

  /* constructor() {
    afterNextRender(() => {
      console.log(window.location.pathname);
    });
  } */
}
