import {Component, OnInit} from '@angular/core';
import {CounterService} from "../counter.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  counter: number = 0;
  constructor(public counterService: CounterService) {
  }
  ngOnInit(): void {
  }



  onClick() {
    this.counterService.onNavigate();
  }
}
