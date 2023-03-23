// function foo() {
//     console.log('Hello');
//     return 42;
//     return 100; // dead code. will never happen
//   }

import { Observable } from 'rxjs';
console.log('with synchronous output');

const foo = new Observable((subscriber) => {
  console.log('Hello');
  subscriber.next(42);
  subscriber.next(100); // "return" another value
  subscriber.next(200); // "return" yet another
});

console.log('before');
foo.subscribe((x) => {
  console.log(x);
});
console.log('after');

console.log('\nwith asynchronous output');

const bar = new Observable((subscriber) => {
  console.log('Hello');
  subscriber.next(42);
  subscriber.next(100);
  subscriber.next(200);
  setTimeout(() => {
    subscriber.next(300); // happens asynchronously
  }, 1000);
});

console.log('before');
bar.subscribe((x) => {
  console.log(x);
});
console.log('after');
