const Rize = require('rize');
const rize = new Rize();
rize
  .goto('https://github.com/')
  .type('input.header-search-input', 'node')
  .press('Enter')
  .waitForNavigation()
//   .assertSee('xxx.js') // 换这个试试 
  .assertSee('node.js')
  .end()  // Don't forget to call `end` function to exit browser!