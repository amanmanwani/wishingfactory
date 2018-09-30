import { Component, OnInit } from '@angular/core';
import { PendingService } from '../pending.service';
import { Pending } from '../pending.models';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
pendings={};
fulfilled={};
valid=false;
display='none';
  constructor(private pending:PendingService) { }

  ngOnInit() {
this.pendings=this.pending.getData();
this.fulfilled=this.pending.get();
  }

  approve(){
    this.display='block';
  }
  reject(){
    this.display='block';
  }
 
}
