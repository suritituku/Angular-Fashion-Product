import { Component, OnInit } from '@angular/core';
import { customerInterface } from '../Customer';
import { PulldataService } from '../pulldata.service';

@Component({
  selector: 'app-testdata',
  templateUrl: './testdata.component.html',
  styleUrls: ['./testdata.component.css']
})
export class TestdataComponent implements OnInit {

  public customer: any = [];
  public errMsg = "";
  constructor(private _custService:PulldataService) { }

  ngOnInit() {
    this._custService.getCustomer().subscribe(data => this.customer = data, error => this.errMsg = error)

  }

}
