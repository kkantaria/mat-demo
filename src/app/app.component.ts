import { Component, Input, ViewChild } from "@angular/core";
import { MatDatepicker } from "@angular/material/datepicker";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  @ViewChild("picker1") datePicker: MatDatepicker<any>;
  title = "app";
  thirdText = "123 Main St, City, State 12345";
  checked: boolean = true;
  ngAfterViewInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.datePicker.open();
  }
  c = () => {
    this.datePicker.open();
  };
}
