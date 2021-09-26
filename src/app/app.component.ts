import { Component, Input,OnInit } from '@angular/core';
import { PulldataService } from './pulldata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pullingdata';

  public customer: any =[];
  public errMsg ="";
constructor(private _custService:PulldataService){}

ngOnInit() {
  this._custService.getCustomer()
    .subscribe(data => this.customer = data, error => this.errMsg = error)

}
}
