String.prototype.toAlternatingCase = function () {
  let results = "";
  for (let i = 0; i < this.length; i++) {
    if (this[i] == this[i].toLowerCase()) {
      results += this[i].toUpperCase();
    } else {
      results += this[i].toLowerCase();
    }
  }
  return results;
};


//  Cleaner Option
// String.prototype.toAlternatingCase = function () {
//   return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
// }  