import {BehaviorSubject} from "rxjs";

export class CounterService {
  counter$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  onNavigate() {
    this.counter$.next(this.counter$.getValue() + 1)
  }
}
