const myModule = (function() {

  let privateVar = "I am private";

  return {
    getPrivateVar: function() {
      return privateVar;
    }
  };
})();

function useMyModule() {
  console.log(myModule.getPrivateVar());
}

useMyModule();

const _ = require('lodash');

console.log(_.isEmpty({}));

const fs = require('fs');

const localModule = require('./localModule.js');

const express = require('express');
const app = express();

fs.writeFileSync('example.txt', 'I am from core module');

localModule.sayHello();

app.get('/', (req, res) => {
  res.send('Hello from Express');
});

app.listen(3000, () => {
  console.log('Server is running');
});

const { sayHello } = require('./module1.js');
const { sayGoodbye } = require('./module2.js');

sayHello();
sayGoodbye();

let condition = true;

if (condition) {
  import('./module1.js').then(module => {
    module.sayHello();
  });
} else {
  import('./module2.js').then(module => {
    module.sayGoodbye();
  });
}