module.exports = function reverse (n) {
    let reversed;
   reversed = parseInt(n.toString().split("").reverse().join(""));
  
   console.log(reversed);
   return reversed;
  
}
