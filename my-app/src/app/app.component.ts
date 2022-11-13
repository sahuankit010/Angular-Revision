import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  fontSizePx = 16;
  name: string = "";
  ngOnInit(){
    this.name = "Binod";
  }
  nameChanged(arg: string) {
    console.log("modelchanged " + arg);
  }
}
