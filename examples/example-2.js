import { Observable } from 'rxjs';

console.log('without observables');
function foo() {
  console.log(`Hello`);
  return 42;
}

const x = foo.call();
console.log(x);

const y = foo.call();
console.log(y);

console.log('\nwith observables');

const bar = new Observable((subscriber) => {
  console.log('Hello');
  subscriber.next(42);
});

bar.subscribe((x) => {
  console.log(x);
});

bar.subscribe((y) => {
  console.log(y);
});
