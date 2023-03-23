import { Observable } from 'rxjs';

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 0);
  subscriber.next(2);
  subscriber.next(3);
});

console.log('just before subscribe');

observable.subscribe({
  next: (x) => {
    console.log(x);
  },
  error: (err) => {
    console.log(err);
  },
  complete: () => {
    console.log('done');
  },
});
console.log('just after subscribe');
