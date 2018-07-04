var b = require('bonescript');
b.analogWrite('P9_14', 0.7, 2000, printJSON);
function printJSON(x) { console.log(JSON.stringify(x)); }
