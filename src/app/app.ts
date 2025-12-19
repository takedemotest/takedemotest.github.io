import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProgressBar } from '../commonComponents/progress-bar/progress-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProgressBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   progress = signal(0);

  increase() {
    if(this.progress() < 100){
      this.progress.update(v => v + 10);
    }
  }
}
