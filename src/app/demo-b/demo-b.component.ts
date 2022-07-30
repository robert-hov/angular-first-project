import { Component, OnInit } from '@angular/core';
import {CounterService} from "../counter.service";

@Component({
  selector: 'app-demo-b',
  templateUrl: './demo-b.component.html',
  styleUrls: ['./demo-b.component.css']
})
export class DemoBComponent implements OnInit {
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
