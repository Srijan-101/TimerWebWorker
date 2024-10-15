import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
     Time:number = 0;
     Duration!:String;
     hours:any;
     minutes:any;
     seconds:any;
     now!:Date;
     count:number = 0;

     timers:any[] = [];

     ngOnInit(){
       
        setInterval(() => {
          this.now = new Date()
          this.hours = this.formatTime(this.now.getHours());
          this.minutes = this.formatTime(this.now.getMinutes());
          this.seconds = this.formatTime(this.now.getSeconds());
          this.count = this.count + 1;
          this.timers.push({count : this.count , field : `${this.hours} : ${this.minutes} : ${this.seconds}`});
        },1000)
     }

     private formatTime(value: number): string {
      return value < 10 ? '0' + value : value.toString();
    }
}
