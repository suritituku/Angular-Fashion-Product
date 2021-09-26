import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerdata',
  templateUrl: './customerdata.component.html',
  styleUrls: ['./customerdata.component.css']
})
export class CustomerdataComponent implements OnInit {

  @Input() customersDetail!: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
