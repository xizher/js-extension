String.prototype.contain = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (this.toString() === arr[i]) {
      return true
    }
  }
  return false
}