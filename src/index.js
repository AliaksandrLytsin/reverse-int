module.exports = function reverse (n) {
   let str = n.toString().match(/\d+/)[0];
   return str.split('').reverse().join('');
}
