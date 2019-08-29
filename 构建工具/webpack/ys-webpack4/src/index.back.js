import sync from './sync.js';
import('./async').then(_ => {
  console.log(_);
});

console.log('index.js');
console.log(sync);