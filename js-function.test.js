const {getName} = require('./functions.js');

const name = getName({ firstName: 'John', lastName: 'Doe' });

console.log(name); // John Doe