import { Component, computed, Input, signal } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.css',
})
export class ProgressBar {
   private _progress = signal(0);
   color: string = '#3f51b5';
   height: string = '20px';

@Input()
set progress(value: number) {
  this._progress.set(value);
}

progressValue = computed(() => this._progress());
}
