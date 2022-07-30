import { Component, OnInit } from '@angular/core';
import {CounterService} from "../counter.service";

@Component({
  selector: 'app-demo-a',
  templateUrl: './demo-a.component.html',
  styleUrls: ['./demo-a.component.css']
})
export class DemoAComponent implements OnInit {

  constructor(
    private counterService: CounterService
  ) { }

  ngOnInit(): void {
    this.counterService.onNavigate();
  }

  onIncrement() {
    this.counterService.onNavigate();
  }
}
