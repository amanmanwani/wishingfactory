import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PendingComponent } from './pending/pending.component';
import { PendingService } from './pending.service';
// import { NgxPaginationModule } from 'ngx-pagination';
// import { PopupModule } from 'ng2-opd-popup';


@NgModule({
  declarations: [
    AppComponent,
    PendingComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [PendingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
