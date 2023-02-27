import { Component } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {
  actual_date: string = new Date().toDateString();
  actual_time: string = new Date().toLocaleTimeString();

  items = ["Angular", "React", "Vue.js", "Bootstrap", "Node.js"]
  constructor() {
    setInterval(()=>{
      this.actual_time = new Date().toLocaleTimeString();
    }, 1000)
  }
}
