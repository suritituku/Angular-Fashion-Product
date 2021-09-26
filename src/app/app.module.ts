import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { CustomerdataComponent } from './customerdata/customerdata.component';
import { PulldataService } from './pulldata.service';
import { TestdataComponent } from './testdata/testdata.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerdataComponent,
    TestdataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [PulldataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
